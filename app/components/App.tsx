import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import Menu from './Nav';
import { action as toggleMenu } from 'redux-burger-menu';
import * as actions from '../actions/actions';
import axios from 'axios';

interface IAppProps {
    isOpen: boolean;
    onButtonClick: () => Redux.Action;
    onFetchButtonClick: () => Redux.Action;
}

interface IAppState {}

const mapStateToProps = (state) => {
    return {
        isOpen: state.burgerMenu.isOpen,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: () => {
            dispatch(toggleMenu({isOpen: true}));
        },
        onFetchButtonClick: () => {
            dispatch(actions.fetchUserStart());
            axios.get('test')
                .then((response) => {
                    console.log(response);
                    dispatch(actions.recieveUsers(response.data));
                })
                .catch((err) => {
                    dispatch(actions.fetchUserErr(err));
                });
        }
    };
};

class App extends React.Component<IAppProps, IAppState> {
    handleButtonClick(e) {
        this.props.onButtonClick();
    }
    handleFetchButtonClick(e) {
        this.props.onFetchButtonClick();
    }
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick.bind(this)}>
                    OPEN
                    <Menu isOpen={this.props.isOpen}></Menu>
                </button>
                <button onClick={this.handleFetchButtonClick.bind(this)}>Fetch Data</button>
                <div id="page-wrap">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);