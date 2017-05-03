/**
 * Created by leglars on 2017/5/1.
 */

import { combineReducers } from 'redux';
import * as alarms from './alarms';
import * as alarmConfig from './alarmConfig';

const reducers = combineReducers(Object.assign(
    alarms,
    alarmConfig,
));

export default reducers;