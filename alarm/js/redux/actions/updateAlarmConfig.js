/**
 * Created by leglars on 2017/5/3.
 */

// export const UPDATE_DATE = "UPDATE_DATE";
// export const TOGGLE_REPEAT_ITEM = "TOGGLE_REPEAT_ITEM";
// export const UPDATE_TIP = "UPDATE_TIP";
// export const CLEAR_ALARM_CONFIG = "CLEAT_ALARM_CONFIG";

export function updateDate(date){
    return {
        type: "UPDATE_DATE",
        date: date,
    }
}

export function toggleRepeatItem(id){
    return {
        type: "TOGGLE_REPEAT_ITEM",
        id: id,
    }
}

export function updateTip(tip){
    return {
        type: "UPDATE_TIP",
        tip: tip,
    }
}

export function clearAlarmConfig() {
    return{
        type: "CLEAR_ALARM_CONFIG",
    }
}