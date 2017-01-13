import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import SearchBox from '../components/SearchBox';
import SearchList from '../components/SearchList';

interface IHome {
  onSearchClick: (userId: string) => Redux.Action;
  searchList: string;
}

const mapStateToProps = (state) => {
  return {
    searchList: state.userName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchClick: (name: string) => {
      dispatch(actions.startSearch(name));
    }
  };
};

class Home extends React.Component<IHome, void> {
  render() {
    const { onSearchClick, searchList } = this.props;
    return (
      <div>
        <SearchBox startSearch={onSearchClick}/>
        <SearchList userName={searchList}/>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
