

export function enableEditAlarm () {
    return {
        type: ENABLE_EDIT_ALARM,
        isAlarmEditable: true,
    }
}

export function disableEditAlarm () {
    return {
        type: DISABLE_EDIT_ALARM,
    }
}