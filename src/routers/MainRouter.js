import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from '../utils/history';
import SetupPage from '../layouts/00_Setup/SetupPage';
import AddCamMain from '../layouts/01_AddCam/AddCamMain';
import SaveCamMain from '../layouts/01_AddCam/SaveCamMain';
import MonitorPage from '../layouts/02_Monitoring/MonitorPage';
import AnalysisPage from '../layouts/03_Analysis/AnalysisPage';

const MainRouter = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path='/' component={SetupPage} />
            <Route path='/addcam' component={AddCamMain} />
            <Route path='/savecam' component={SaveCamMain} />
            <Route path='/monitor' component={MonitorPage} />
            <Route path='/analysis' component={AnalysisPage} />
        </Switch>
    </ConnectedRouter>
);

export default MainRouter;