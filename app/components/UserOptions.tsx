import * as React from 'react';

interface IUserOptionsState {}
interface IUserOptionsProps {
  options: number[];
}

class UserOptions extends React.Component<IUserOptionsProps, IUserOptionsState> {
  private renderChoices() {
    return this.props.options.map(num => (
      <li key={num}
          className="user-options">
        {num}
      </li>
      )
    );
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