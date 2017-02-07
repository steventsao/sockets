import * as React from 'react';

interface ISearchListProps {
  item: string;
}

interface ISearchListState {}

class SearchList extends React.Component<ISearchListProps, ISearchListState> {
  renderRows(items) {
    return items.map((item, i) => (
      <li key={i}>
        {item}
      </li>
      )
    );
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
