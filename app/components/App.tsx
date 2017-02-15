import * as React from 'react';
import NavigationBar from './NavigationBar';

interface IAppProp {
    messages: string[];
}
interface IAppState {}

class App extends React.Component<IAppState, IAppProp> {
    render() {
        return (
            <div className="container">
                <NavigationBar />
                {this.props.children}
            </div>
        );
    }
}

export default App;