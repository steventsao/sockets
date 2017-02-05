import * as React from 'react';

interface ITimerState {}

interface ITimerProps {
  seconds?: number;
}

class Timer extends React.Component<ITimerProps, ITimerState> {
    // NOTE: props are not available in constructor
  constructor() {
    super();
  }

  private getTimeoutDescription() {
    return "Time's up! All options are disabled.";
  }

  // NOTE: do not setState within componentDidUpdate to avoid recursive calls
  render() {
    if (this.props.seconds) {
      return (
        <div>
          {this.props.seconds} Seconds Left...
        </div>
      );
    } else {
      return (
        <div>
          {this.getTimeoutDescription()}
        </div>
      );
    }
  }
}

export default Timer;