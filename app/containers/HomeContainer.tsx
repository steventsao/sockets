import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import SearchBox from '../components/SearchBox';
import SearchList from '../components/SearchList';
import Messages from '../components/Messages';

interface IHomeProps {
  onSearchClick: (userId: string) => Redux.Action;
  searchList: string;
}

interface IHomeState {
  messages: string[];
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

class Home extends React.Component<IHomeProps, IHomeState> {
  private messages: string[];
  constructor() {
    super();
    this.state = {
      messages: [],
    };
  }
  handleDeleteNumber(): void {
    this.setState({
      messages: this.state.messages.slice(0, this.state.messages.length - 1),
    });
  }
  handleSearch(input: string) {
    this.setState({
      messages: [...this.state.messages, input],
    });
  }
  render() {
    const { onSearchClick, searchList } = this.props;
    return (
      <div>
        <SearchBox deleteNumber={this.handleDeleteNumber.bind(this)}
                   handleSearch={this.handleSearch.bind(this)}/>
        <SearchList userName={searchList}/>
        <Messages messages={this.state.messages}/>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
