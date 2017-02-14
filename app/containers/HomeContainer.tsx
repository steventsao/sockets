import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import SearchBox from '../components/SearchBox';
import Messages from '../components/Messages';
import TimedOptions from '../components/TimedOptions';
import { sum } from 'lodash';

interface IHomeProps {
  onSearchClick: (userId: string) => Redux.Action;
  searchList: string;
}

interface IHomeState {
  messages: string[];
  showResults: boolean;
  results: number[];
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

let initialState = {
  messages: [],
  showResults: false,
  results: [],
};

class Home extends React.Component<IHomeProps, IHomeState> {
  constructor() {
    super();
    this.state = initialState;
  }

  handleDeleteNumber(): void {
    this.setState(deleteItem);
  }

  handleSearch(input: string) {
    this.setState(addMessage(input));
  }

  private handleTimeout(results: any) {
    this.setState(showResults(results));
  }

  private renderResults() {
    if (this.state.showResults) {
      const TOTAL_SCORE = sum(this.state.results);
      const AVG_SCORE = Math.round(TOTAL_SCORE / this.state.results.length);
      return <div>
        Final Score is: {TOTAL_SCORE} <br />
        Average estimate is: {AVG_SCORE || "0"}
      </div>;
    }
  }

  private clear() {
    this.setState(clearResults);
  }

  render() {
    return (
      <div className="home-container">
        <SearchBox deleteNumber={this.handleDeleteNumber.bind(this)}
                   handleSearch={this.handleSearch.bind(this)}/>
        {this.renderResults()}
        <TimedOptions onTimeout={this.handleTimeout.bind(this)} onClear={this.clear.bind(this)}/>
      </div>
    );
  }
};

// TODO add a return type
function showResults(results: number[]) {
  return s => Object.assign({}, s, {
    showResults: true,
    results,
  });
}

function clearResults(s: IHomeState, p: IHomeProps): IHomeState {
  return Object.assign({}, s, {
    showResults: false,
    results: [],
  });
}

function deleteItem(s: IHomeState, p: IHomeProps): IHomeState {
  const ITEM_LENGTH = s.messages.length;
  return Object.assign({}, s, {
    messages: s.messages.slice(0, ITEM_LENGTH - 1),
  });
}

function addMessage(message: string) {
  return s => Object.assign({}, s, {
    messages: [...s.messages, message],
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
