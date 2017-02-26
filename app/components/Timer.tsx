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

  renderDescription() {
    if (this.props.seconds) {
      return <div>
        {this.props.seconds} Seconds Left...
      </div>;
    } else {
      return <div>
          {this.getTimeoutDescription()}
          <button onClick={this.props.restart}>Restart</button>
        </div>;
    }
  }
  // NOTE: do not setState within componentDidUpdate to avoid recursive calls
  render() {
    return (
      <div>
        <div className="clock-container">
          <div className="clock">
            <div className="clock-frame">
              <div className={`clock-needle ${this.props.seconds ? "animate" : ""}`}></div>
            </div>
          </div>
        </div>
          <p>{this.renderDescription()}</p>
      </div>
    );
  }
}

export default Timer;