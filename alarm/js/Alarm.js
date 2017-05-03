import React from 'react';
import { View,
         StyleSheet,
         StatusBar,
         Text,
         Button
           } from 'react-native';
import { Link,  } from 'react-router-native';
import { withRouter } from 'react-router-dom';
// connect to redux
import ActionCreator from './redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
// load components
import AlarmList from './AlarmList';


class Alarm extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

  render() {
    return (
      <View style={styles.container}>
          <ActionBar alarmsEditable={this.props.alarms.alarmsEditable}
                     toggleEditAlarms={this.props.toggleEditAlarms}
                     addAlarm={this.props.addAlarm}/>

        <View style={styles.alarmWrap}>
          <AlarmList alarms={this.props.alarms.alarmConfigs}/>
        </View>
      </View>
    )
  }
}

class ActionBar extends React.Component {
    constructor(props){
        super(props);
    }

  _onPressAdd(){
      // const newAlarm = {
      //     time: "08:30",
      //     tip: "haha",
      //     repeat: ["Mon", "Wed"]
      // };
      // this.props.addAlarm(
      //     newAlarm.time, newAlarm.tip, newAlarm.repeat
      // )
  }

  render() {
    const { alarmsEditable, toggleEditAlarms } = this.props;
    console.log(alarmsEditable);
    return (
      <View style={styles.actionBar}>
        <View style={{width: 72}}>
             <Button
                 onPress={() => toggleEditAlarms()}
                 title={!alarmsEditable ? "Edit" : "Cancel"}
                 color="#555"
                 accessibilityLabel={!alarmsEditable? "Edit" : "Cancel"}
                />
        </View>
          <View style={{flex: 1}}></View>
        <View style={{width: 50}}>
            <Link to="/add_alarm">
                <Text style={styles.actionBarText}>Add</Text>
            </Link>
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
    color: "#555",
      paddingTop: 9
  },
  alarmWrap: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#dddddd",
  }
});

function mapStateToProps(state) {
    return {
        alarms: state.alarms
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreator, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Alarm);
