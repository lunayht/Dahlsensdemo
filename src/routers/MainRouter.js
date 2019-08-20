import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from '../utils/history';
import MainPage from '../layouts/00_Main/MainPage';

const MainRouter = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={MainPage} />
        </Switch>
    </ConnectedRouter>
);

export default MainRouter;