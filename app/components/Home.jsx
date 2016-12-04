import SearchBox from './SearchBox.jsx';
import SearchList from './SearchList.jsx';
import React, { Component } from 'react';
import * as actions from '../actions/actions.js';

class Home extends Component {
  render() {
    return (
      // Refactor Searchbox so it takes the dispatch method through connect()
      <div>
        <SearchBox startSearch={actions.startSearch} dispatch={this.props.dispatch} receiveViews={actions.receiveViews}/>
        <SearchList userName={this.props.searchList}/>
      </div>
    );
  }
}

export default Home;
