import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomeContainer from './containers/HomeContainer';
import NavigationBar from './components/NavigationBar';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomeContainer} />
        <Route path="test" component={NavigationBar} />
    </Route>
)