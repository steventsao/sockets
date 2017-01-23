import * as React from 'react';
import * as Redux from 'redux';
import axios from 'axios';

export interface ISearchBox {
  startSearch: (userId: string) => Redux.Action;
  receiveViews?: (views: any[], count: number) => Redux.Action;
  addNumber: () => void;
  deleteNumber: () => void;
}

class SearchBox extends React.Component<ISearchBox, void> {
  private textInput: HTMLInputElement;
  private userId: number;

  printClick() {
    console.log('hi');
  }
  render() {
    return (
      <div className="input-group">
        <input className="form-control"
          placeholder="Write here..."
          ref={(input) => { this.textInput = input; }} />
        <span className="input-group-btn">
          <button className="btn btn-default"
            type="button"
            onClick={this.props.deleteNumber.bind(this)}>Delete Item</button>
          <button className="btn btn-default"
            type="button"
            onClick={this.props.addNumber.bind(this)}>
          Search {this.userId}
          </button>
        </span>
      </div>
    );
  }
}

export default SearchBox;
