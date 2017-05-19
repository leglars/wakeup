/**
 * Created by leglars on 2017/5/1.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import createFilter from 'redux-persist-transform-filter';
import uuid from 'uuid';

console.log(uuid())

const initialState = {
    alarms: {
        alarmsEditable: false,
        alarmConfigs: [{
            id: "4ab3e993-a00a-4964-924a-6da7c2b4d8e9",
            time: "07:00",
            extension: "AM",
            tip: "DefaultAlarm",
            repeat: [],
            active: true,
        }]
    },
    alarmConfig: {
        repeat: [
            {
                name: "M",
                id: 1,
                toggle: false
            }, {
                name: "T",
                id: 2,
                toggle: false
            }, {
                name: "W",
                id: 3,
                toggle: false
            }, {
                name: "T",
                id: 4,
                toggle: false
            }, {
                name: "F",
                id: 5,
                toggle: false
            }, {
                name: "S",
                id: 6,
                toggle: false
            }, {
                name: "S",
                id: 7,
                toggle: false
            }
        ],
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
    blacklist: ["alarmConfig"],
    transforms: [
        saveAlarmConfigs
    ]
});

export default store;