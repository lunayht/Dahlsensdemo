import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import history from '../utils/history';
import createRootReducer from '../reducers/rootReducer';

const middleware = routerMiddleware(history);

// Redux store to hold the app state 
const store = createStore(createRootReducer(history), compose(
    applyMiddleware(thunkMiddleware, middleware, logger)
));

export default store;