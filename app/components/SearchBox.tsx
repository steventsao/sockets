import * as React from 'react';
import * as Redux from 'redux';
import axios from 'axios';

export interface ISearchBox {
  startSearch: (userId: string) => Redux.Action;
  receiveViews?: (views: any[], count: number) => Redux.Action;
  deleteNumber: () => void;
}
export interface ISearchBoxState {
  textInput: string;
}

class SearchBox extends React.Component<ISearchBox, ISearchBoxState> {
  private userId: number;
  constructor() {
    super();
    this.state = {
      textInput: "",
    };
  }
  handleRef(evt) {
    console.log(evt);
  }
  handleChange(e) {
    this.setState({textInput: e.target.value});
    console.log(this.state);
  }
  render() {
    return (
      <div className="input-group">
        <input className="form-control"
               placeholder="Say Something..."
               value={this.state.textInput}
               onChange={this.handleChange.bind(this)}/>
        <span className="input-group-btn">
          <button className="btn btn-default"
            type="button"
            onClick={this.props.deleteNumber.bind(this)}>Delete Item</button>
          <button className="btn btn-default"
            type="button" >
          Search {this.userId}
          </button>
        </span>
      </div>
    );
  }
}

export default SearchBox;
