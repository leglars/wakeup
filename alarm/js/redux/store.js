/**
 * Created by leglars on 2017/5/1.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';

const initialState = {
    alarms: {
        alarmsEditable: false,
    }
};

const enhancer = compose(applyMiddleware(logger),);

const store = createStore(reducers, initialState, enhancer);

export default store;