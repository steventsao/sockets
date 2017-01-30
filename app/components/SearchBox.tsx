import * as React from 'react';
import * as Redux from 'redux';
import axios from 'axios';

export interface ISearchBoxProps {
  receiveViews?: (views: any[], count: number) => Redux.Action;
  deleteNumber: () => void;
  handleSearch: (input: string) => void;
}
export interface ISearchBoxState {
  textInput: string;
}

class SearchBox extends React.Component<ISearchBoxProps, ISearchBoxState> {
  private textInput: string;
  constructor() {
    super();
    this.state = {
      textInput: "",
    };
  }
  handleRef(element) {
    this.textInput = element;
  }
  handleSubmit(e) {
    this.props.handleSearch(this.state.textInput);
    this.setState({
      textInput: ""
    });
  }
  handleChange(e) {
    this.setState({textInput: e.target.value});
  }
  render() {
    return (
      <div className="input-group">
        <input className="form-control"
               placeholder="Say Somethings..."
               value={this.state.textInput}
               onChange={this.handleChange.bind(this)}
               ref={this.handleRef.bind(this)}/>
        <span className="input-group-btn">
          <button className="btn btn-default"
                  type="button"
                  onClick={this.props.deleteNumber.bind(this)}>Delete Item</button>
          <button className="btn btn-default"
                  type="button"
                  onClick={this.handleSubmit.bind(this)}>
            Add Item
          </button>
        </span>
      </div>
    );
  }
}

export default SearchBox;
