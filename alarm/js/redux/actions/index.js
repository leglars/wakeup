/**
 * Created by leglars on 2017/5/1.
 */
import * as alarmActions from './alarmActions'
import * as updateAlarmConfig from './updateAlarmConfig';

const ActionCreator = Object.assign({},
    alarmActions,
    updateAlarmConfig,
);

export default ActionCreator