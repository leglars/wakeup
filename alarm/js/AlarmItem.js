import React from 'react';
import {TouchableHighlight,
        Text,
        StyleSheet,
        View,
        Switch,
           } from 'react-native';

class AlarmItem extends React.Component{
  constructor(props) {
    super(props);
  }

  props: {
    disabled: boolean,
    time: string,
    tip?: ?string,
    repeat?: ?array,
    testID?: ?string,
  };

  static propTypes = {

    disabled: React.PropTypes.bool.isRequired,
    time: React.PropTypes.string.isRequired,
    tip: React.PropTypes.string,
    repeat: React.PropTypes.array,
    /**
      * Used to locate this view in end-to-end tests.
      */
    testID: React.PropTypes.string,
  };

  render () {
    const { disabled, repeat, time, tip } = this.props;
    return (
      <TouchableHighlight
        onPress={this._onPressButton}
        style={styles.alarmItem}>
        <View style={styles.itemContainer}>
          <View style={styles.alarmLeft}>
            <Text style={styles.alarmTime}>{time}</Text>
            <View style={{flexDirection: "row", flexWrap: 'nowrap'}}>
              <Text style={styles.alarmContent}>{tip}</Text>
              <Text style={styles.alarmContent}>
                {
                  repeat.length === 7
                    ? " Daily Alarm"
                    : repeat.map((weekday) => ' ' + weekday)
                }
              </Text>
            </View>
          </View>
          <View style={styles.alarmRight}>
            <Switch
              onValueChange={(value) => this.setState({isAlarmEnabled: value})}
              value={!disabled}
              tintColor="#fff" //android disable background
              style={{marginBottom: 10}}
               />
          </View>

        </View>
      </TouchableHighlight>
    )
  }

  _onPressButton() {
    console.log("press alarm item");
  }
}

const styles = StyleSheet.create({
  alarmItem: {
    height: 80,
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
    fontSize: 16,
    color: '#fff',
    fontWeight: '300',
  }

})

module.exports = AlarmItem;
