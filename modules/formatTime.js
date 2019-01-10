function formatTime(time) {

    var hours = Math.floor(time / 3600);
    time = time - hours * 3600;
    var minutes = Math.floor(time / 60);
    time = time - minutes * 60;
    var seconds = time;
    var toDisplay = ''; 
    
    if (hours > 0) {
        toDisplay += hours + ' hours, ';
    } 
    if (minutes > 0) {
        toDisplay += minutes + ' minutes, ';
    } 
    if (seconds > 0) {
        toDisplay += seconds + ' seconds. ';
    } 

    return toDisplay;

};

exports.print = formatTime;