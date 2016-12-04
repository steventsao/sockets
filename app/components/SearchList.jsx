import React, { Component } from 'react';
import { map } from 'lodash';

class SearchList extends Component {
  renderRows(userNames) {
    return map(userNames, (userName, i) => <li key={i}>{userName}</li>)
  }
  render() {
    return (
      <ul>
        {this.renderRows(this.props.userName)}
      </ul>
    )
  }
}

export default SearchList;
