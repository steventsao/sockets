import * as React from 'react';

interface ITimerState {}

interface ITimerProps {
  seconds?: number;
  restart?: () => void;
}

class Timer extends React.Component<ITimerProps, ITimerState> {
  // NOTE: props are not available in constructor
  private getTimeoutDescription() {
    return "Time's up! All options are disabled.";
  }

  // NOTE: do not setState within componentDidUpdate to avoid recursive calls
  render() {
    if (this.props.seconds) {
      return (
        <div>
          {this.props.seconds} Seconds Leftsssssss...
        </div>
      );
    } else {
      return (
        <div>
          {this.getTimeoutDescription()}
          <button onClick={this.props.restart}>Restart</button>
        </div>
      );
    }
  }
}

export default Timer;