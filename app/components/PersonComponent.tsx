import * as React from 'react';

export interface Person {
  name: string;
  age: number;
}

class PersonComponent extends React.Component<Person, {}> {
  render() {
    return (
      <div>
        My name is {this.props.name} <br />
        User age is {this.props.age}
      </div>
    )
  }
}

export default PersonComponent;