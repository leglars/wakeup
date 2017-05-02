/**
 * Created by leglars on 2017/5/1.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import createFilter from 'redux-persist-transform-filter';

const initialState = {
    alarms: {
        alarmsEditable: false,
        alarmConfigs: [
            {
                time: "06:30",
                tip: "Wake up! Idiot!!!",
                repeat: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                active: true,
            }
        ]
    }
};

const enhancer = compose(applyMiddleware(logger),autoRehydrate());
// const enhancer = compose(applyMiddleware(logger),);

const store = createStore(reducers, initialState, enhancer);

// https://github.com/rt2zz/redux-persist/issues/318
const saveAlarmConfigs = createFilter(
    'alarms',
    ['alarmConfigs']
);

persistStore(store, {
    storage: AsyncStorage,
    transforms: [
        saveAlarmConfigs
    ]
});

export default store;