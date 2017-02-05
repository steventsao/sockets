import * as React from 'react';

interface IUserOptionsState {}
interface IUserOptionsProps {
  options: number[];
  mute: boolean;
  selectOption: (num: number) => any;
}

class UserOptions extends React.Component<IUserOptionsProps, IUserOptionsState> {
  private renderChoices() {
    return this.props.options.map(num => (
      <li onClick={this.props.selectOption.bind(this, num)} value={num} key={num}>
        {num}
      </li>
      )
    );
  }

  private getClassName() {
    const BASE_CLASS = "user-options ";
    if (this.props.mute) {
      return `${BASE_CLASS} muted`;
    } else {
      return BASE_CLASS;
    }
  }

  render() {
    // TODO unstyle the bullets from the <li>'s
    return (
      <ul className={this.getClassName()}>
        {this.renderChoices()}
      </ul>
    );
  }
}

export default UserOptions;