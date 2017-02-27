import * as React from 'react';
import { Link } from 'react-router';

interface INavigationBarProp {
    messages: string[];
}
interface INavigationBarState {}

class NavigationBar extends React.Component<INavigationBarState, INavigationBarProp> {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/home" className="navbar-brand">Home</Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;