/**
 * Created by leglars on 2017/4/30.
 */
// function enableEditAlarm(state) {
//     if (!state.isAlarmEditable) {
//         return {...state, isAlarmEditable: !this}
//     }
//     return state
// }
//
// function disableEditAlarm(state) {
//     if (state.isAlarmEditable) {
//         return {...state, isAlarmEditable: !this}
//     }
// }

export const editAlarmReducer = function (state=[], action) {
    switch(action.type) {
        case 'ENABLE_EDIT_ALARM':
            return [...state, {isAlarmEditable: action.isAlarmEditable}];
        default:
            return state
    }
}
//
// export default function(state, action) {
//     if(typeof(state.isAlarmEditable) !== 'undefined') {
//         return operations(state, action)
//     }
// }

import * as types from '../actions/types';

