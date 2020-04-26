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

var picChanger = function() {

    var picTime = new Date().getHours();
    var caption;
    var banner = document.getElementById("main-image");

    if (picTime === partyTime) {
        caption = "Let's party";
        banner.style.backgroundImage = "url('assets/party-time.jpg')"
    }
    else if (picTime === flyTime) {
        caption = "Time to fly!";
        banner.style.backgroundImage = "url('assets/gotta-fly.jpg')";
    }
    else if (picTime === stretchTime) {
        caption = "Stretch it out!";
        banner.style.backgroundImage = "url('/assets/part-time.jpg')";
    }
    else if (picTime === dinnerTime) {
        caption = "This iz not cheezburger : (";
        banner.style.backgroundImage = "url('assets/tomato_cat.jpg')";
    }
    else if (picTime === gymTime) {
        caption = "Let's get swole!";
        banner.style.backgroundImage = "url('assets/time-to-hit-the-gym.jpg')";
    }
    else if (picTime >= 7 || picTime < 12) {
        caption = "Good morning!";
        banner.style.backgroundImage = "url('assets/time-for-romance.jpg')";
    }
    else if (picTime < 18) {
        caption = "Good afternoon!";
        banner.style.backgroundImage = "url('assets/dinner-time.jpg')";
    }
    else if (picTime < 22) {
        caption = "Good evening!";
        banner.style.backgroundImage = "url('assets/happy-hour.jpg')";
    }
    else {
        caption = "Sweet dreamzzz";
        banner.style.backgroundImage = "url('assets/sleepy_kitty')"
    }

    banner.innerText = caption;
    displayCurrentTime();
}

setInterval(picChanger, 1000);

var partyButton = document.getElementById("party-button");

var letsParty = function() {
    if (partyTime < 0) {
        partyTime = new Date().getHours();
        partyButton.innerText = "Party Over!";
        partyButton.style.backgroundColor = "#B0CAE5";
    }
    else {
        partyTime = -1;
        partyButton.innerText = "Party Time!";
        partyButton.style.backgroundColor = "#E4593A";
    }
}

partyButton.addEventListener("click", letsParty);
letsParty();
