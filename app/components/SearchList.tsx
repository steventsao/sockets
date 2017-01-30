import * as React from 'react';
import { map } from 'lodash';

export interface ISearchList {
  userName: string;
}
class SearchList extends React.Component<ISearchList, {}> {
  renderRows(userNames) {
    return map(userNames, (userName, i) => <li key={i}>{userName}</li>);
  }
  render() {
    return (
      <ul>
        {this.renderRows(this.props.userName)}
      </ul>
    );
  }
}

export default SearchList;
