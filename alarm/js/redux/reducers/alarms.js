/**
 * Created by leglars on 2017/5/1.
 */
import * as types from '../actions/types';

export function alarms (state=[], action) {
    switch (action.type) {
        case types.EDIT_ALARMS:
            return{
                    alarmsEditable: true
                }
            ;
        default:
            return state
    }
}

// function todos(state = [], action) {
//     switch (action.type) {
//         case ADD_TODO:
//             return [
//                 ...state,
//                 {
//                     text: action.text,
//                     completed: false
//                 }
//             ]
//         case TOGGLE_TODO:
//             return state.map((todo, index) => {
//                 if (index === action.index) {
//                     return Object.assign({}, todo, {
//                         completed: !todo.completed
//                     })
//                 }
//                 return todo
//             })
//         default:
//             return state
//     }
// }

