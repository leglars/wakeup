import React, { PropTypes } from 'react';
import { View,
         StyleSheet,
         Text,
         ListView
           } from 'react-native';

import AlarmItem from './AlarmItem';


class AlarmList extends React.Component{
  constructor(props) {
    super(props);

      //initial data, bad practice
      // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      // this.state = {
      //     dataSource: ds.cloneWithRows(this.props.alarms),
      // }
  }
    // when props updates, bad practice
    //https://github.com/reactjs/redux/issues/683
    // componentWillReceiveProps (nextProps) {
    //     if (nextProps.alarms !== this.props.alarms) {
    //         this.setState({
    //             dataSource: this.state.dataSource.cloneWithRows(nextProps.alarms)
    //         })
    //     }
    // }

  render () {
      // best practice
      // http://reactjs.cn/react/tips/props-in-getInitialState-as-anti-pattern.html
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      const dataSource = ds.cloneWithRows(this.props.alarms);
    return (
        <ListView
          // style={styles.alarmList}
          dataSource={dataSource}
          renderRow={(alarm) => <AlarmItem {...alarm} />}
          />
    )}
}

AlarmList.propTypes = {
  alarms: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      time: PropTypes.string.isRequired,
      tip: PropTypes.string,
      repeat: PropTypes.arrayOf(PropTypes.string).isRequired,
      active: PropTypes.bool
  }))
};

const styles = StyleSheet.create({
  alarmList: {
    backgroundColor: "#aaaaaa",
    height: "auto",
  },

});

module.exports=AlarmList;
