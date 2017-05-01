/**
 * Created by leglars on 2017/5/1.
 */
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