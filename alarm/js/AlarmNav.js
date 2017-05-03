/**
 * Created by leglars on 2017/5/2.
 */
import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import Alarm from './Alarm';
import AddAlarm from './AddAlarm';
import { View, StyleSheet, StatusBar } from 'react-native';

class AlarmNav extends React.Component{
    render(){
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <StatusBar
                        translucent={true}
                    />
                    <Route exact path="/" component={Alarm} />
                    <Route path="/add_alarm" component={AddAlarm} />
                </View>
            </NativeRouter>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    }
});

export default AlarmNav;