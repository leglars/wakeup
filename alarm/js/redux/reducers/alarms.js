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

export function alarms (state=[], action) {
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
        default:
            return state
    }
}

