import React from 'react';
import { View,
         StyleSheet,
         StatusBar,
         Text,
         Button
           } from 'react-native';

import AlarmList from './AlarmList';


class Alarm extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}

         />

          <ActionBar alarmsEditable={this.props.alarmsEditable}
                     toggleEditAlarms={this.props.toggleEditAlarms}
                     addAlarm={this.props.addAlarm}/>

        <View style={styles.alarmWrap}>
          <AlarmList alarms={this.props.alarms.alarms}/>
        </View>
      </View>
    )
  }
}

class ActionBar extends React.Component {
    constructor(props){
        super(props)
        this._onPressAdd= this._onPressAdd.bind(this);
    }

  _onPressAdd(){
      const newAlarm = {
          time: "08:30",
          tip: "haha",
          repeat: ["Mon", "Wed"]
      };
      this.props.addAlarm(
          newAlarm.time, newAlarm.tip, newAlarm.repeat
      )
  }

  render() {
    const { alarmsEditable, toggleEditAlarms } = this.props;
    return (
      <View style={styles.actionBar}>
        <View style={{width: 72}}>
            {!alarmsEditable
                ? <Button
                    onPress={() => toggleEditAlarms()}
                    title="Edit"
                    color="#555"
                    accessibilityLabel="Edit"
                />
                : <Button
                    onPress={() => toggleEditAlarms()}
                    title="Cancel"
                    color="#555"
                    accessibilityLabel="Cancel"
                />
            }

        </View>
          <View style={{flex: 1}}></View>
        <View style={{width: 50}}>
          <Button
            onPress={this._onPressAdd}
            title="Add"
            color="#555"
            accessibilityLabel="Add Alarm"
            />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  actionBar: {
    paddingTop: 20,
    flexDirection: "row",
    backgroundColor: "#fff",
    height: 55,
    paddingLeft: 15,
    paddingRight: 10
  },
  actionBarText: {
    textAlign: "left",
    fontSize: 18,
    color: "#555"
  },
  alarmWrap: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#dddddd",
  }
})

module.exports = Alarm;
