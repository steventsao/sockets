import SearchBox from './SearchBox';
import SearchList from './SearchList';
import * as React from 'react';
import * as actions from '../actions/actions';
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
      </div>
    );
  }
}

export default Home;
