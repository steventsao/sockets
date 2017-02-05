import * as React from 'react';

interface ITimerState {
  seconds: number;
  description: string;
}

interface ITimerProps {}

class Timer extends React.Component<ITimerProps, ITimerState> {
  constructor() {
    super();
    this.state = {
      seconds: 10,
      description: "Seconds left...",
    };
  }

  private getTime() {
    return this.state.seconds;
  }

  private handleTimeout() {
    if (!this.state.seconds) {
      this.setState(
        Object.assign(
          {},
          this.state,
          { description: "Times up!" }
        )
      );
    }
  }

  componentDidMount() {
    // TODO deregister timeout when seconds === 0
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

  render() {
    return <div>
        {this.state.seconds} {this.state.description}
      </div>;
  }
}
export default Timer;