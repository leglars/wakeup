/**
 * Created by leglars on 2017/5/1.
 */

import { combineReducers } from 'redux';
import * as alarms from './alarms';

const reducers = combineReducers(Object.assign(
    alarms,
));

export default reducers;