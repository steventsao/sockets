import * as React from 'react';
import { map } from 'lodash';

export interface ISearchListProps {
  item: string;
}

class SearchList extends React.Component<ISearchListProps, {}> {
  renderRows(items) {
    return map(items, (item, i) => <li key={i}>{item}</li>);
  }

  render() {
    return (
      <ul>
        {this.renderRows(this.props.item)}
      </ul>
    );
  }
}

export default SearchList;
