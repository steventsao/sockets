import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import SearchBox from '../components/SearchBox';
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
  constructor() {
    super();
    this.state = {
      messages: [],
      showResults: false,
      results: [],
    };
  }

  handleDeleteNumber(): void {
    this.setState(HomeStates.deleteItem);
  }

  handleSearch(input: string) {
    this.setState(HomeStates.addMessage(input));
  }

  private handleTimeout(results: any) {
    this.setState(HomeStates.showResults(results));
  }

  private renderResults() {
    if (this.state.showResults) {
      const TOTAL_SCORE = sum(this.state.results);
      const AVG_SCORE = Math.round(TOTAL_SCORE / this.state.results.length);
      return <div className="default-font">
        Final Score is: {TOTAL_SCORE} <br />
        Average estimate is: {AVG_SCORE || "0"}
      </div>;
    }
  }

  private clear() {
    this.setState(HomeStates.clearResults);
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
class HomeStates {
  static showResults(results: number[]) {
    return s => Object.assign({}, s, {
      showResults: true,
      results,
    });
  }

  static clearResults(s: IHomeState, p: IHomeProps): IHomeState {
    return Object.assign({}, s, {
      showResults: false,
      results: [],
    });
  }

  static deleteItem(s: IHomeState, p: IHomeProps): IHomeState {
    const ITEM_LENGTH = s.messages.length;
    return Object.assign({}, s, {
      messages: s.messages.slice(0, ITEM_LENGTH - 1),
    });
  }
  static addMessage(message: string) {
    return s => Object.assign({}, s, {
      messages: [...s.messages, message],
    });
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
