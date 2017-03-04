import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import Menu from './Nav'
import { action as toggleMenu } from 'redux-burger-menu';
import BurgerIcon from 'redux-burger-menu';

interface IAppProps {
    isOpen: boolean;
    onButtonClick: ()=> Redux.Action;
}
interface IAppState {
}

const mapStateToProps = (state) => {
    return {
        isOpen: state.burgerMenu.isOpen
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: () =>{
            dispatch(toggleMenu({isOpen: true}));
        }
    };
};

class App extends React.Component<IAppProps, IAppState> {
    handleButtonClick(e) {
        this.props.onButtonClick();
    }
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick.bind(this)}>OPEN</button>
                <Menu isOpen={this.props.isOpen}></Menu>
                <div id="page-wrap">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);