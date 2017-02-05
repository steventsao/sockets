import * as React from 'react';
import Timer from './Timer';
import UserOptions from './UserOptions';

interface ITimedOptionsProps {}
interface ITimedOptionsState {
  seconds: number;
  isMute: boolean;
}

class TimedOptions extends React.Component<ITimedOptionsProps, ITimedOptionsState> {
  constructor() {
    super();
    this.state = {
      seconds: 10,
      isMute: false,
    };
  }

  componentDidMount() {
    // TODO deregister timeout when seconds === 0
    const currentTime = this.state.seconds || 10;
    this.setState((p, s) => Object.assign(
      {},
      {
        seconds: this.state.seconds || 10,
        isMute: false,
      }
    ));

    setInterval(() => {
      let currentTimeLeft;
      if (!this.state.seconds) {
        currentTimeLeft = 0;
      } else {
        currentTimeLeft = this.state.seconds - 1;
      }
      this.setState(
        Object.assign(
          {},
          this.state,
          { seconds: currentTimeLeft }
        )
      );
      this.handleTimeout();
    }, 1000);
  }

  private handleTimeout() {
    if (!this.state.seconds) {
      this.setState((p, s) => Object.assign({}, s, {
        isMute: true,
      }) as ITimedOptionsState);
    }
  }
  render() {
    return (
      <div>
        <Timer seconds={this.state.seconds} />
        <UserOptions options={[0.5, 1, 2, 3, 5]} mute={this.state.isMute}/>
      </div>
    );
  }
}

export default TimedOptions;