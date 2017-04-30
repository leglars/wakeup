// export const EDIT_ALARM = "EDIT_ALARM";

export function enableEditAlarm () {
    return {
        type: ENABLE_EDIT_ALARM,
    }
}

export function disableEditAlarm () {
    return {
        type: DISABLE_EDIT_ALARM,
    }
}