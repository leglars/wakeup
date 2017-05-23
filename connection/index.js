/**
 * Created by leglars on 2017/5/9.
 */
var express = require('express');
var firebase = require('firebase');
var request = require('request');
var Particle = require('particle-api-js');
// var debounce = require('lodash.debounce');
var Rx = require('rxjs/Rx')


// Initialize Firebase
var config = {
    apiKey: "AIzaSyCiMNYzF8kk7H6IfVmGEMspJGJ5tEUycmI",
    authDomain: "wakeup-1da7c.firebaseapp.com",
    databaseURL: "https://wakeup-1da7c.firebaseio.com",
    projectId: "wakeup-1da7c",
    storageBucket: "wakeup-1da7c.appspot.com",
    messagingSenderId: "314436561282"
};
firebase.initializeApp(config);

// setup the basic info for connecting particle cloud
var particle = new Particle();
var token;
var DEVICE_ID = "420036000447353138383138";
var VARIABLE = "pressure";


particle.login({username:'leglars@gmail.com', password:'1936887IWMzy'}).then(
    function(data){
        token = data.body.access_token;
    },
    function(err) {
        console.log('Could not log in.', err);
    }
);


// start the express app
var database = firebase.database();
var app = express();

app.post("/", function(req, res) {
    res.send("Hello World");
    // database.ref("test/from/backend").set({
    //     "hello": "world"
    // })
    console.log("you reach a new place")
    
    console.log(req)
    console.log(req.query)
});

app.post("/devicedata", function(req, res){
    
    var userInfo = {
        userId: req.query.userId || "chenx",
        userSteps: Number(req.query.userSteps) || 3,
        userWeight: Number(req.query.userWeight) || 150,
        date: req.query.date || getDate(),
        uuid: req.query.uuid
    }

    function getDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd='0'+dd
        } 
        if(mm<10) {
            mm='0'+mm
        }
        return yyyy + "-" + mm + "-" + dd
    }

    res.send("start updating data ...");
    console.log(userInfo)
    /**
     * stop: when get a value from isWakeup, so the loop can stop
     * excuate: a loop: every 300ms request the pressure data from particle cloud
     *  -> push the data into function validSteps and get bool return
     *  -> push this record to firebase
     * 
     *  firebase structure
     *  userID
     *     # [Date]
     *        ##uuid
        *        ### stepRecord - update from backend
        *           #### record
        *        ### steps - update from backend
        *        ### isWakeup - update from ios
     *     # userInfo
     *        ## ...
     */
    var steps = 0;
    var _data = [];
    var error = 0;
    console.log("go into data")
    var getPressureValueFromSensor = setInterval(function(){
        Rx.Observable.fromPromise(
            particle.getVariable({
                deviceId: DEVICE_ID,
                name: VARIABLE,
                auth: token
            }))
        .subscribe({
            next: function(data) {
                var d = Number(data.body.result);
                console.log(d);
                pushDataAndCheckStep(d);
            },
            error: function(err) {
                console.log("error happened: " + err);
                errorIncrement();
            },
            complete: function() {
                console.log("complete")
            }
        })

    if(steps === userInfo.userSteps || error > 100) {
            clearInterval(getPressureValueFromSensor);
            console.log("stop the loop");
        }
    }, 300)

    function pushDataAndCheckStep(d) {
        _data.push(d);
        console.log("push data");
        if (checkStep(_data, d)) {
            updateSteps()
        };
    }

    function cleanData() {
        _data = [];
    }

    function errorIncrement(){
        error ++;
        console.log(error)
    }

    function updateSteps() {
        steps ++;
        updateFBStep(steps);
        console.log("steps: " + steps)
    }

    function checkStep(data, d) {
        console.log("check step" + "//////  data:  / " + data);
        if (Math.min.apply(null, data) < userInfo.userWeight / 2) {
            console.log("check step" + "#####  d: " + d);
            if (d > userInfo.userWeight * (1 - 0.2)) {
                setStepRecord(d);
                cleanData();
                console.log('step')
                return true
            }
        }
        return false
    }

    function setStepRecord(d) {
        database.ref(userInfo.userId + "/"
                     + userInfo.date + "/" + userInfo.uuid + "/stepRecord")
                     .push(d)
    }

    function updateFBStep(step) {
        var updateStep = {}
        updateStep[userInfo.userId + "/" + userInfo.date+ "/" + userInfo.uuid + "/steps"] = step
        database.ref().update(updateStep)
    }
});

app.listen(3000, function() {
    console.log('example app listening on port 3000! Happy Hacker')
});
