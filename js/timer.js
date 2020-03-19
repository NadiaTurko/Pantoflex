function timerStart(){

    expiringDate = new Date();
    expiringDate.setDate(expiringDate.getDate() + 15);

    intervalId = setInterval(tick, 1000);
}

function calculateRemainingTime(){

    let currentDate = new Date();
    let remainingTime = expiringDate.getTime() - currentDate.getTime();

    if (remainingTime < 0) return null;

    let dateObject = {};

    dateObject.days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    dateObject.hours = Math.floor((remainingTime % (1000* 60 * 60 * 24)) / (1000 * 60 * 60));
    dateObject.minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    return dateObject;
}

function refreshTimer(dateObject){

    if (!dateObject) {
        daysId.textContent = 0;
        hoursId.textContent = 0;
        minutesId.textContent = 0;
        clearInterval(intervalId);
    }

    daysId.textContent = dateObject.days;
    hoursId.textContent = dateObject.hours;
    minutesId.textContent = dateObject.minutes;
}

function tick(){

    let dateObject = calculateRemainingTime();
    refreshTimer(dateObject);

}

let expiringDate;
let intervalId;

let daysId = document.getElementById('days');
let hoursId = document.getElementById('hours');
let minutesId = document.getElementById('minutes');

timerStart();
