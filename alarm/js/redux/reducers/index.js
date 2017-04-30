/**
 * Created by leglars on 2017/4/28.
 */
import { combineReducers } from 'redux';
import * as types from '../actions/types';


function editAlarmReducer (state=[], action) {
    switch(action.type) {
        case types.ENABLE_EDIT_ALARM:
            return [
                ...state,
                {isAlarmEditable: true}
                ];
        default:
            return state
    }
}

export default combineReducers({
    editAlarmReducer,
})