/**
 * Created by leglars on 2017/5/1.
 */

// export const TOGGLE_EDIT_ALARMS = "TOGGLE_EDIT_ALARMS";
// export const SAVE_ALARM = "SAVE_ALARM";
// export const DELETE_ALARM = "DELETE_ALARM";

export function toggleEditAlarms() {
    return {
        type: "TOGGLE_EDIT_ALARMS",
    }
}

export function saveAlarm(date, time, tip, repeat) {
    return {
        type: "SAVE_ALARM",
        date: date,
        time: time.time,
        extension: time.extension,
        tip: tip,
        repeat: repeat,
    }
}

export function deleteAlarm(id) {
    return {
        type: "DELETE_ALARM",
        id: id
    }
}