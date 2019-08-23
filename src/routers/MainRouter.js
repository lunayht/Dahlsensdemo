import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from '../utils/history';
import MainPage from '../layouts/00_Main/MainPage';
import AddCamMain from '../layouts/01_AddCam/AddCamMain';
import SaveCamMain from '../layouts/01_AddCam/SaveCamMain';
import TestPage from '../layouts/01_AddCam/TestPage';

const MainRouter = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/addcam' component={AddCamMain} />
            <Route path='/savecam' component={SaveCamMain} />
            <Route path='/test' component={TestPage} />
        </Switch>
    </ConnectedRouter>
);

export default MainRouter;