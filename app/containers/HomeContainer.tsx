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

class Home extends React.Component<IHomeProps, IHomeState> {
  private messages: string[];
  constructor() {
    super();
    this.state = {
      messages: [],
      showResults: false,
      results: [],
    };
  }

  handleDeleteNumber(): void {
    this.setState((s, p) => Object.assign({}, s, {
      messages: this.state.messages.slice(0, this.state.messages.length - 1),
    }));
  }

  handleSearch(input: string) {
    this.setState((s, p) => Object.assign({}, s, {
      messages: [...this.state.messages, input],
    }));
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
      <div>
        <SearchBox deleteNumber={this.handleDeleteNumber.bind(this)}
                   handleSearch={this.handleSearch.bind(this)}/>
        <Messages messages={this.state.messages}/>
        <TimedOptions onTimeout={this.handleTimeout.bind(this)} onClear={this.clear.bind(this)}/>
        {this.renderResults()}
      </div>
    );
  }
};

// TODO add a return type
function showResults(results: number[]) {
  return (s: IHomeState, p: IHomeProps) => Object.assign({}, s, {
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
