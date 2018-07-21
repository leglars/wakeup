/**
 * Created by leglars on 2017/5/1.
 */

export const TOGGLE_EDIT_ALARMS = "TOGGLE_EDIT_ALARMS";
export const SAVE_ALARM = "SAVE_ALARM";
export const DELETE_ALARM = "DELETE_ALARM";

export const UPDATE_DATE = "UPDATE_DATE";
export const TOGGLE_REPEAT_ITEM = "TOGGLE_REPEAT_ITEM";
export const UPDATE_TIP = "UPDATE_TIP";
export const CLEAR_ALARM_CONFIG = "CLEAT_ALARM_CONFIG";


export interface SaveAlarm {
    type: "SAVE_ALARM";
    date: date,
    time: time.time,
    extension: time.extension,
    tip: tip,
    repeat: repeat,
}