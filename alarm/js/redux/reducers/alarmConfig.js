/**
 * Created by leglars on 2017/5/3.
 */
import * as types from '../actions/types';

const initialState = {
    tip: "Alarm haha"
};

function toggleRepeatItem(state, id){
    return state.map((item, index) => {
        if(index === id) {
            return Object.assign({}, item, {
                toggle: !item.toggle,
            })}
            return item
        })
}

export function alarmConfig(state=initialState, action){
    switch(action.type) {
        case types.UPDATE_DATE:
            return {
                ...state,
                date: action.date
            };
        case types.TOGGLE_REPEAT_ITEM:
            return {
                ...state,
                repeat: toggleRepeatItem(state.repeat, action.id)
            };
        case types.UPDATE_TIP:
            return {
                ...state,
                repeat: action.tip
            };
        case types.CLEAR_ALARM_CONFIG:
            return initialState;
        default:
            return state
    }
}