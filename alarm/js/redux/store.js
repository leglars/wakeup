/**
 * Created by leglars on 2017/5/1.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';

const initialState = {
    alarms: {
        alarmsEditable: false,
        alarms: [
            {
                time: "06:30",
                tip: "Wake up! Idiot!!!",
                repeat: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                active: true,
            }
        ]
    }
};

const enhancer = compose(applyMiddleware(logger),);

const store = createStore(reducers, initialState, enhancer);

export default store;