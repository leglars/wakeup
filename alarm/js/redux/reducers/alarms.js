/**
 * Created by leglars on 2017/5/1.
 */
import * as types from '../actions/types';
import uuid from 'uuid';

function saveAlarm (state, action){
    return [
        ...state,
        {
            id: uuid(),
            date: action.date,
            time: action.time,
            extension: action.extension,
            tip: action.tip,
            repeat: action.repeat,
            active: true
        }
    ]
}

function deleteAlarm(state, action) {
    const index = state.findIndex((alarm) => alarm.id === action.id);
    return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
    ]
}

export function alarms (state={}, action) {
    switch (action.type) {
        case types.TOGGLE_EDIT_ALARMS:
            return{
                ...state,
                alarmsEditable: !state.alarmsEditable
                };
        case types.SAVE_ALARM:
            return {
                ...state,
                alarmConfigs: saveAlarm(state.alarmConfigs, action)
            };
        case types.DELETE_ALARM:
            return {
                ...state,
                alarmConfigs: deleteAlarm(state.alarmConfigs, action)
            };
        default:
            return state
    }
}

