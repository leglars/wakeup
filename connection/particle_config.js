/**
 * Created by leglars on 2017/5/9.
 */
var Particle = require('particle-api-js');

var particle = new Particle();
var token;

particle.login({username:'leglars@gmail.com', password:'1936887IWMzy'}).then(
    function(data){
        token = data.body.access_token;
    },
    function(err) {
        console.log('Could not log in.', err);
    }
);