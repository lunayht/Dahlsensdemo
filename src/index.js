import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core';
import AppContainer from './containers/AppContainer';
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import THEME from './styles/MuiTheme';

ReactDOM.render(
    <MuiThemeProvider theme={THEME}>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </MuiThemeProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
