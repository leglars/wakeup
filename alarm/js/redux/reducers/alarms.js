/**
 * Created by leglars on 2017/5/1.
 */
import * as types from '../actions/types';
import uuid from 'uuid';

function addAlarm (state, action){
    return [
        ...state,
        {
            id: uuid(),
            time: action.time,
            tip: action.tip,
            repeat: action.repeat,
            active: true
        }
    ]
}

export function alarms (state=[], action) {
    switch (action.type) {
        case types.TOGGLE_EDIT_ALARMS:
            return{
                ...state,
                alarmsEditable: !state.alarmsEditable
                };
        case types.ADD_ALARM:
            return {
                ...state,
                alarmConfigs: addAlarm(state.alarmConfigs, action)
            };
        default:
            return state
    }
}

