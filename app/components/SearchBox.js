import React, { Component } from 'react';

class SearchBox extends Component {
  componentDidMount() {
    console.log('mounted...', this)
  }
  componentDidUpdate() {
    console.log('updating...', this)
  }
  printClick() {
    console.log('clicking...')
  }
  render() {
    return (
      <div className='input-group'>
        <input className='form-control'
               placeholder='Search for...'
               ref={(input) => { this.textInput = input }}></input>
        <span className='input-group-btn'>
          <button className='btn btn-default'
                  type='button'
                  onClick={this.printClick}>
                    Search
          </button>
        </span>
      </div>
    )
  }
}

export default SearchBox;
