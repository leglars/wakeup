/**
 * Created by leglars on 2017/4/28.
 */

function enableEditAlarm(state) {
    if (!state.isAlarmEditable) {
        return {...state, isAlarmEditable: !this}
    }
    return state
}

function disableEditAlarm(state) {
    if (state.isAlarmEditable) {
        return {isAlarmEditable: !this}
    }
}

export default function(state = [], action) {
    switch(action.type) {
        case 'ENABLE_EDIT_ALARM':
            return enableEditAlarm();
        case 'DISABLE_EDIT_ALARM':
            return disableEditAlarm();
        default:
            return state
    }
}