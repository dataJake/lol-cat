var flyTime = 1;
var stretchTime = 14;
var dinnerTime = 19;
var gymTime = 10;
var partyTime;
var morning = 7;
var evening = 18;
var noon = 12;
var sleepyTime = 22;


/*keep clock updating in real time*/
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
        if (hours !== 12) {
          hours = hours - 12;
      }
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

/*setting the image*/
var picChanger = function() {

    var picTime = new Date().getHours();
    var message;
    var catPic = "url('assets/dinner-time.jpg')";

    var caption = document.getElementById('caption');
    var currentCat = document.getElementById('main-image');

    if (picTime === partyTime) {
        message = "Let's party";
        catPic = "assets/party-time.jpg";;
    }
    else if (picTime === flyTime) {
        message = "Time to fly!";
        catPic = "assets/gotta-fly.jpg";
    }
    else if (picTime === stretchTime) {
        message = "Stretch it out!";
        catPic = "assets/time-for-a-stretch.jpg";
    }
    else if (picTime === dinnerTime) {
        message = "This iz not cheezburger : (";
        catPic = "uassets/tomato_cat.jpg";
    }
    else if (picTime === gymTime) {
        message = "Let's get swole!";
        catPic = "assets/time-to-hit-the-gym.jpg";
    }
    else if (picTime < noon) {
        message = "Good morning!";
        catPic = "assets/time-for-romance.jpg";
    }
    else if (picTime < evening) {
        message = "Good afternoon!";
        catPic = "assets/dinner-time.jpg";
    }
    else if (picTime < sleepyTime) {
        message = "Good evening!";
        catPic = "assets/happy-hour.jpg";
    }
    else {
        message = "Sweet dreamzzz";
        catPic = "assets/sleepy_kitty";
    }

    currentCat.src = catPic;
    caption.innerText = message;


    displayCurrentTime();
}

setInterval(picChanger, 1000);

/* Party Button controls*/
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


/*selector controls*/
var flySelect = document.getElementById("fly");

var flyEvent = function() {
    flyTime = flySelect.value;
};

flySelect.addEventListener("change", flyEvent);


var stretchSelect = document.getElementById("stretch");

var stretchEvent = function() {
    stretchTime = stretchSelect.value;
};

stretchSelect.addEventListener("change", stretchEvent);


var dinnerSelect = document.getElementById("dinner");

var dinnerEvent = function() {
    dinnerTime = dinnerSelect.value;
};

dinnerSelect.addEventListener("change", dinnerEvent);


var gymSelect = document.getElementById("gym");

var gymEvent = function() {
    gymTime = gymSelect.value;
};

gymSelect.addEventListener("change", gymEvent);
