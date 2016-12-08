import SearchBox from './SearchBox';
import SearchList from './SearchList';
import PersonComponent from './PersonComponent';
import * as React from 'react';
import * as actions from '../actions/actions.js';
import * as Redux from 'redux';

interface IHome {
  dispatch: Redux.Dispatch<any>;
  searchList: string;
}

class Home extends React.Component<IHome, {}> {
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
