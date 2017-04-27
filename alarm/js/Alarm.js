import React from 'react';
import { View,
         StyleSheet,
         StatusBar,
         Text,

           } from 'react-native';

import AlarmList from './AlarmList';


class Alarm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 1)"
          barStyle="light-content"
         />
        <Text style={styles.test}>Temp Space</Text>
        <View style={styles.actionBar}>

        </View>
        <View style={styles.alarmWrap}>
          <AlarmList />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  test: {
    color: "#fff"
  },
  actionBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    height: 50
  },
  alarmWrap: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#dddddd",
  }
})

module.exports = Alarm;
