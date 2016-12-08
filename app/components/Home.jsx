import SearchBox from './SearchBox.tsx';
import SearchList from './SearchList.tsx';
import PersonComponent from './PersonComponent.tsx';
import React, { Component } from 'react';
import * as actions from '../actions/actions.js';

class Home extends Component {
  render() {
    return (
      // Refactor Searchbox so it takes the dispatch method through connect()
      <div>
        <SearchBox startSearch={actions.startSearch} dispatch={this.props.dispatch} receiveViews={actions.receiveViews}/>
        <SearchList userName={this.props.searchList}/>
        <PersonComponent name={"Bob"} age={20} />
      </div>
    );
  }
}

export default Home;
