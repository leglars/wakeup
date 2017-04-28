import React from 'react';
import { View,
         StyleSheet,
         Text,
         ListView
           } from 'react-native';

import AlarmItem from './AlarmItem';


class AlarmList extends React.Component{
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          disabled: false,
          time: "06:30",
          tip: "Wake up! Idiot!!!",
          repeat: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        }
      ])
    };
  }

  render () {
    return (
        <ListView
          // style={styles.alarmList}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <AlarmItem {...rowData} />}
          />
    )}
};

const styles = StyleSheet.create({
  alarmList: {
    backgroundColor: "#aaaaaa",
    height: "auto",
  },

});

module.exports=AlarmList;
