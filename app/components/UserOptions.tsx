import * as React from 'react';

interface IUserOptionsState {}
interface IUserOptionsProps {
  options: number[];
  mute: boolean;
}

class UserOptions extends React.Component<IUserOptionsProps, IUserOptionsState> {
  private renderChoices() {
    return this.props.options.map(num => (
      <li key={num}
          className={this.getClassName()}>
        {num}
      </li>
      )
    );
  }

  private getClassName() {
    if (this.props.mute) {
      return "user-options muted";
    } else {
      return "user-options";
    }
  }

  render() {
    // TODO unstyle the bullets from the <li>'s
    return (
      <ul>
        {this.renderChoices()}
      </ul>
    );
  }
}

export default UserOptions;