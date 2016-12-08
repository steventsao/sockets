import * as React from 'react';
import * as Redux from 'redux';
import axios from 'axios';

export interface ISearchBox {
  dispatch: Redux.Dispatch<(arg: string) => void>;
  startSearch: (userId: string) => Redux.Action;
  receiveViews: (views: any[], count: number) => Redux.Action;
}

class SearchBox extends React.Component<ISearchBox, {}> {
  private textInput: HTMLInputElement;
  private userId: number;

  printClick() {
    this.props.dispatch(this.props.startSearch('randomUser'));
    axios.get('/channel', { params: { name: this.textInput } })
      .then(res => {
        console.log("Answer", res);
        this.props.dispatch(this.props.receiveViews(res.data.items, 1000));
      });
  }
  render() {
    return (
      <div className="input-group">
        <input className="form-control"
          placeholder="Search for..."
          ref={(input) => { this.textInput = input; }} />
        <span className="input-group-btn">
          <button className="btn btn-default"
            type="button"
            onClick={this.printClick.bind(this)}>
          Search {this.userId}
          </button>
        </span>
      </div>
    );
  }
}

export default SearchBox;
