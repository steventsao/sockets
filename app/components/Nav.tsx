import * as React from 'react';
import { Link } from 'react-router';
import {stack as Menu} from 'react-burger-menu';
import {decorator as reduxBurgerMenu} from 'redux-burger-menu';
import * as Radium from 'radium';

let RadiumLink = Radium(Link);

interface INavProp {
    pageWrapId: string;
    width: number;
    isOpen: boolean
}

interface INavState {
}

class Nav extends React.Component<INavProp, INavState> {
    constructor() {
        super();
    }
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu pageWrapId={"page-wrap"}
                  width={300}>
                <RadiumLink to="/home" id="home" className="menu-item">Home</RadiumLink>
                <RadiumLink onClick={ this.showSettings } className="menu-item--small">Settings</RadiumLink>
            </Menu>
        );
    }
}

export default reduxBurgerMenu(Nav);
