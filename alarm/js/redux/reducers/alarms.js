/**
 * Created by leglars on 2017/5/1.
 */
import * as types from '../actions/types';

function addAlarm (state, action){
    return [
        ...state,
        {
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
                    alarmsEditable: !state.alarmsEditable
                };
        case types.ADD_ALARM:
            return {
                ...state,
                alarms: addAlarm(state.alarms, action)
            };
        default:
            return state
    }
}

