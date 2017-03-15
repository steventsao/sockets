import React from 'react';

class NameCard extends React.Component {
  render() {
    return <div>Hello World {this.props.userName}</div>;
  }
}

export default NameCard;