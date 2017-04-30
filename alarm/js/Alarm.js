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
        super(props);
    }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}

         />

        <ActionBar {...this.props}/>

        <View style={styles.alarmWrap}>
          <AlarmList />
        </View>
      </View>
    )
  }
}

class ActionBar extends React.Component {
    constructor(props) {
        super(props)
    }

  _onPressAdd() {

  }

  render() {
    return (
      <View style={styles.actionBar}>
        <View style={{width: 50}}>
          <Button
            onPress={() => this.props.editAlarms()}
            title="Edit"
            color="#555"
            accessibilityLabel="Edit"
            />

        </View>
          <View style={{flex: 1}}><Text>{this.props.alarmsEditable}</Text></View>
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
