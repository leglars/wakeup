/**
 * Created by leglars on 2017/5/1.
 */

// export const TOGGLE_EDIT_ALARMS = "TOGGLE_EDIT_ALARMS";
// export const ADD_ALARM = "ADD_ALARM";
// export const DELETE_ALARM = "DELETE_ALARM";

export function toggleEditAlarms() {
    return {
        type: "TOGGLE_EDIT_ALARMS",
    }
}

export function addAlarm(time, tip, repeat) {
    return {
        type: "ADD_ALARM",
        time: time,
        tip: tip,
        repeat: repeat
    }
}

export function deleteAlarm(id) {
    return {
        type: "DELETE_ALARM",
        id: id
    }
}