import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import activityReducer from './activityReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    form: formReducer,
    activity: activityReducer
})