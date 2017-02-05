import * as React from 'react';
import Timer from './Timer';
import UserOptions from './UserOptions';
import Messages from './Messages';
import { toString } from 'lodash';

interface ITimedOptionsProps {
  onTimeout: (results: number[]) => void;
  onClear: () => void;
}

interface ITimedOptionsState {
  seconds: number;
  isMute: boolean;
  votes: number[];
}

class TimedOptions extends React.Component<ITimedOptionsProps, ITimedOptionsState> {
  constructor() {
    super();
    this.state = getInitialState({ seconds: 0, isMute: false, votes: []}, {});
  }

  componentDidMount() {
    // TODO deregister timeout when seconds === 0
    const currentTime = this.state.seconds || 10;
    this.setState(getInitialState);

    setInterval(() => {
      let currentTimeLeft;
      if (!this.state.seconds) {
        currentTimeLeft = 0;
      } else {
        currentTimeLeft = this.state.seconds - 1;
      }
      this.setState(updateTime(currentTimeLeft));
      this.handleTimeout();
    }, 1000);
  }

  private handleTimeout() {
    if (!this.state.seconds) {
      this.setState(enableMute);
      this.props.onTimeout(this.state.votes);
    }
  }

  private handleRestart() {
    this.setState(getInitialState);
    this.props.onClear();
  }

  private handleSelect(num: number) {
    this.setState(addOption(num));
  }


  render() {
    return (
      <div>
        <Timer seconds={this.state.seconds} restart={this.handleRestart.bind(this)}/>
        <UserOptions options={VoteOptions.values} mute={this.state.isMute} selectOption={this.handleSelect.bind(this)} />
        <Messages messages={this.state.votes.map(toString)} />
      </div>
    );
  }
}

class VoteOptions {
  public static values = [0.5, 1, 2, 3, 5];
  public static COUNTDOWN_TIME = 10;
}

function updateTime(seconds: number) {
  return (s: ITimedOptionsState, p: ITimedOptionsProps) => Object.assign({}, s, { seconds });
}

function enableMute(s, p): ITimedOptionsState {
  return Object.assign({}, s, { isMute: true, });
}

function getInitialState(s: ITimedOptionsState, p): ITimedOptionsState {
  return Object.assign({}, s, {
      seconds: VoteOptions.COUNTDOWN_TIME,
      isMute: false,
      votes: [],
  });
}

function addOption(option: number) {
  return (s: ITimedOptionsState, p) => Object.assign({}, s, {
      votes: [...s.votes, option],
    });
}

export default TimedOptions;