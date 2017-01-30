import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import SearchBox from '../components/SearchBox';
import SearchList from '../components/SearchList';
import Messages from '../components/Messages';

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

class Home extends React.Component<IHome, {messages: string[]} > {
  private messages: string[];
  constructor() {
    super();
    this.state = {
      messages: ["this", "is", "private"]
    };
  }
  handleAddNumber(text: HTMLButtonElement): void {
    console.log(text, " is being passed in");
    let newMessages = this.state.messages.slice();
    this.setState(
      {
        messages: [...newMessages],
      }
    );
  }
  handleDeleteNumber(): void {
    this.setState({
      messages: this.state.messages.slice(0, this.state.messages.length - 1),
    });
  }
  render() {
    const { onSearchClick, searchList } = this.props;
    // todo investigate why this.state is empty???
    return (
      <div>
        <SearchBox startSearch={onSearchClick} deleteNumber={this.handleDeleteNumber.bind(this)}/>
        <SearchList userName={searchList}/>
        <Messages messages={this.state.messages}/>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
