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
            <div>
                <Menu width={300}>
                    <Link to="/home" id="home" className="menu-item">Home</Link>
                    <Link onClick={ this.showSettings } className="menu-item--small">Settings</Link>
                </Menu>
            </div>
        );
    }
}

export default reduxBurgerMenu(Nav);
