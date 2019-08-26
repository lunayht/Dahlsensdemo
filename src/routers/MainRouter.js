import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from '../utils/history';
import SetupPage from '../layouts/00_Setup/SetupPage';
import AddCamMain from '../layouts/01_AddCam/AddCamMain';
import SaveCamMain from '../layouts/01_AddCam/SaveCamMain';

const MainRouter = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path='/' component={SetupPage} />
            <Route path='/addcam' component={AddCamMain} />
            <Route path='/savecam' component={SaveCamMain} />
        </Switch>
    </ConnectedRouter>
);

export default MainRouter;