/**
 * Created by leglars on 2017/5/2.
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    DatePickerIOS,
    Button,
    TouchableHighlight,
    TextInput,
            } from 'react-native';
import { Link } from 'react-router-native';
// connect to redux
import ActionCreator from './redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

class AddAlarm extends React.Component{

    static defaultProps = {
        date: new Date(),
        timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
    };

    state = {
        date: this.props.date,
        timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
        tip: "Alarm",
    };

    // componentWillMount() {
    //     this.props.updateDate(this.props.date);
    //     this.setState({
    //         date: this.props.alarmConfig.date,
    //         timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
    //     })
    // }

    constructor(props){
        super(props);
    }

    onDateChange(date) {
        this.setState({date: date});
        this.props.updateDate(date);
    };

    propTimeToDate(hour, min) {
        // hour, min : string
        const date = new Date();
        if (typeof hour !== "number") {
            hour = Number(hour)
        }
        if (typeof min !== "number") {
            min = Number(min)
        }
        date.setHours(hour);
        date.setMinutes(min);
        return date;
    }

    _24to12(hour, min){
        // hour, min : number
        // return object, {time: string - hour:min, extension: string}
        let extension = "AM";

        if (typeof hour === "number") {
            if(hour === 0) {
                hour = 12;
            }else {
                if(hour === 12) {
                    extension = "PM"
                }
                if(hour > 12) {
                    hour -= 12;
                    extension = "PM"
                }
            }

            if(hour < 10) {
                hour = "0" + String(hour);
            }
            min = String(min);
            return {
                time: [hour, min].join(":"),
                extension: extension
            }
        }

    }

    _12to24(time, extension){
        /*
            time - get from props, string, hour:min
            extension - get from props, string, "AM" or "PM"
            return [hour, min] : number
        */

        let hour, min = time.split(":");
        if (extension === "AM") {
            hour = Number(hour);
            if (hour === 12) {
                hour = 0
            }
        }else{
            hour = Number(hour);
            if (hour !== 12) {
                hour += 12
            }
        }

        return [hour, Number(min)]
    }

    _transformRepeat(repeat){
        /*
        * repeat - array[ shape{id, name, toggle} ]
        * return repeat - array[toggled name]
        * */

        let toggledList = [];
        repeat.map((item, index) => {
            if(item.toggle) {
                toggledList.push(item.id)
            }
        });


        return toggledList.reduce((repeatList, i)=>{
            console.log(i);
            switch (i) {
                case 1:
                    repeatList.push('Mon');
                    break;
                case 2:
                    repeatList.push('Tus');
                    break;
                case 3:
                    repeatList.push('Wed');
                    break;
                case 4:
                    repeatList.push('Thu');
                    break;
                case 5:
                    repeatList.push('Fri');
                    break;
                case 6:
                    repeatList.push('Sat');
                    break;
                case 7:
                    repeatList.push('Sun');
                    break;
            }
            return repeatList
        }, []);
    }

    handleSaveAlarm() {
        const { date } = this.state;
        // const nd = this.propTimeToDate("2", "24");
        // console.log(nd);
        const hour = date.getHours();
        const min = date.getMinutes();
        const timePackage = this._24to12(hour, min);
        const tip = this.state.tip;
        const repeat = this._transformRepeat(this.props.alarmConfig.repeat);
        this.props.saveAlarm(date, timePackage, tip, repeat);
    };



    render(){
        console.log(this.state);
        console.log(this.props);
        return(
            <View style={styles.container}>
                <ActionBar saveAlarm={this.handleSaveAlarm.bind(this)}/>
                <View style={styles.wrap}>
                    <View style={styles.datePickerIOS}>
                        <DatePickerIOS
                            date={this.state.date}
                            mode="time"
                            timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                            onDateChange={this.onDateChange.bind(this)}
                            minuteInterval={10}
                        />
                    </View>
                    <View style={styles.card}>
                        <TouchableHighlight
                            onPress={() => {}}>
                            <View style={styles.cell}>
                                <Text style={styles.cellHead}>Repeat</Text>
                                <View style={styles.repeatItems}>
                                    {this.props.alarmConfig.repeat.map((item, index) => (
                                        <RepeatItem item={item} key={index}
                                                    index={index}
                                                    onClick = {() => this.props.toggleRepeatItem(index)}
                                        />
                                    ))}
                                </View>
                            </View>
                        </TouchableHighlight>
                        <View style={styles.segment} />
                        <TouchableHighlight
                            onPress={() => {}}>
                            <View style={styles.cell}>
                                <Text style={styles.cellHead}>Tip</Text>
                                <TextInput
                                    ref="tip"
                                    style={styles.textInput}
                                    onChangeText={(tip) => this.setState({tip})}
                                    value={this.state.tip}
                                    maxLength = {20}
                                />
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

class ActionBar extends React.Component {
    render() {
        return (
            <View  style={styles.actionBar}>
                <Link to="/">
                    <Text style={styles.actionBarText}>Cancel</Text>
                </Link>
                <View style={{width: 240, paddingLeft: 95}}>
                    <Text style={styles.actionBarText}>Edit alarm</Text>
                </View>
                <View style={{width: 60}}>
                    <Button
                        onPress={this.props.saveAlarm}
                        title="Save"
                        color="#555"
                        accessibilityLabel="Save your alarm"
                    />
                </View>
            </View>
        )
    }
}

class RepeatItem extends React.Component {
    render(){
        const { onClick, item } = this.props;

        return (
            <View style={
                !item.toggle
                    ? styles.repeatItem
                    : styles.repeatItemHighlight
            }>
            <TouchableHighlight
                onPress={onClick}>
                <Text style={styles.repeatItemText}>
                    {item.name}
                </Text>

            </TouchableHighlight>
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
        paddingRight: 10,
    },
    actionBarText: {
        textAlign: "left",
        fontSize: 18,
        color: "#555",
        paddingTop: 9,
        alignContent: 'center'
    },
    wrap: {
        flex: 1,
        backgroundColor: "#dddddd",
    },
    datePickerIOS: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        marginTop: 2,
        paddingLeft: 20,
        shadowColor: "#eeeeee",
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    card: {
        marginTop: 4,
        paddingLeft: 10,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: "#666"
    },
    cell: {
        flexDirection: "row",
        paddingTop: 6,
        paddingBottom: 6,
        alignContent: "center",
    },
    segment: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#666"
    },
    cellHead: {
        fontSize: 18,
        marginRight: 30
    },
    repeatItems: {
        marginLeft: 80,
        flexDirection: 'row'
    },
    repeatItem: {
        backgroundColor: "#eee",
        width: 18,
        marginRight: 4,
        marginLeft:4,
        alignContent: "center"
    },
    repeatItemHighlight: {
        backgroundColor: "#888",
        width: 18,
        marginRight: 4,
        marginLeft:4,
        alignContent: "center"
    },
    repeatItemText: {
        fontSize: 18,
    },
    textInput: {
        marginLeft: 115,
        marginTop: 5,
        height: 18,
        width: 180,
        borderColor: "#333",
        borderBottomWidth: 1,
    }
});

function mapStateToProps(state) {
    return {
        alarmConfig: state.alarmConfig,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreator, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAlarm);