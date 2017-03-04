import * as React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import HomeContainer from './containers/HomeContainer';
import LobbyContainer from './containers/LobbyContainer';


export default (
    <Route path="/" component={App} history={browserHistory}>
        <IndexRoute  component={LobbyContainer} />
        <Route path="/home" component={HomeContainer} />
    </Route>
)