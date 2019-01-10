var os = require('os');
var colors = require('colors');
var formatTime = require('./formatTime');

function getOSinfo() {
    var type = os.type();
    var release = os.release();
    if (type === 'Darwin') {
        type = 'OS X';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.grey, type);
    console.log('Release:'.red, release);               
    console.log('CPU model:'.blue, cpu);    
    console.log('Uptime: ~'.green, formatTime.print(uptime));
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:'.white, userInfo.homedir);
}

exports.print = getOSinfo;