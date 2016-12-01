import React, { Component } from 'react';
import axios from 'axios';

class SearchBox extends Component {
  componentDidMount() {
  }
  componentDidUpdate() {
    console.log('updating...', this);
  }
  printClick() {
    axios.get('/channel')
      .then(res => console.log("Answer", res));
  }
  render() {
    return (
      <div className="input-group">
        <input className="form-control"
          placeholder="Search for..."
          ref={(input) => { this.textInput = input; }}
        />
        <span className="input-group-btn">
          <button
            className="btn btn-default"
            type="button"
            onClick={this.printClick}
          >
          Search
          </button>
        </span>
      </div>
    );
  }
}

export default SearchBox;
