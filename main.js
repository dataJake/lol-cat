var currentTime;
var flyTime;
var stretchTime;
var dinnerTime;
var gymTime;
var partyTime;
var morning = 7;
var evening = 18;
var noon = 12;
var sleepyTime = 22;

var displayCurrentTime = function() {

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var amOrPm = "am";
    var time;
    var clock = document.getElementById('clock');

    if (hours >= 12) {
        amOrPm = "pm";
        hours = hours - 12;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    time = hours + ":" + minutes + ":" + seconds + " " + amOrPm;

    clock.innerHTML = time;
}

setInterval(displayCurrentTime, 1000);

var picChanger = function() {

    var picTime = new Date().getHours();
    var caption;
    var banner = document.getElementsByClassName("main-image");

    if (picTime === flyTime) {
        caption = "Time to fly!";
        banner.style.backgroundImage = "url('assets/gotta-fly-.jpg')"
    }
}
