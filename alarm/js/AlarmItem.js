import React from 'react';
import {TouchableHighlight,
        Text,
        StyleSheet,
        View,
        Switch

           } from 'react-native';

class AlarmItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isAlarmEnabled: true,
      tip: "Wake up! Idiot!!!",
      repeat: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }
  }

  _onPressButton() {
    console.log("press alarm item");
  }

  render () {
    const { repeat } = this.state;
    return (
      <TouchableHighlight
        onPress={this._onPressButton}
        style={styles.alarmItem}>
        <View style={styles.itemContainer}>
          <View style={styles.alarmLeft}>
            <Text style={styles.alarmTime}>06:30</Text>
            <View style={{flexDirection: "row", flexWrap: 'wrap'}}>
              <Text style={styles.alarmContent}>{this.state.tip}</Text>
              <Text style={styles.alarmContent}>
                {
                  repeat.length === 7
                    ? "Daily Alarm"
                    : repeat.map((weekday) => weekday + ' ')
                }
              </Text>
            </View>
          </View>
          <View style={styles.alarmRight}>
            <Switch
              onValueChange={(value) => this.setState({isAlarmEnabled: value})}
              value={this.state.isAlarmEnabled}
              tintColor="#fff" //android disable background
              style={{marginBottom: 10}}
               />
          </View>

        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  alarmItem: {
    height: 75,
    backgroundColor: "#555555",
  },
  itemContainer: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 5
  },
  alarmLeft: {
    height: 60,
    flexDirection: 'column',
    flex: 1,
  },
  alarmRight: {
    width: 75,
    height: 75,
    flexDirection: 'column',
    // backgroundColor: 'red',
    alignItems: "center",
    justifyContent: "center"
  },

  alarmTime: {
    fontSize: 45,
    color: '#fff',
    fontWeight: '400',
  },
  alarmContent: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '300',
  }

})

module.exports = AlarmItem;
