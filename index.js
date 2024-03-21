const hoursElem = document.getElementById("hours")
const minutesElem = document.getElementById("minutes")
const secondsElem = document.getElementById("seconds")
const amPmElem = document.getElementById("amPm")

setInterval(function () {

const date = new Date();
let hours = date.getHours();
let amPm = "AM";
if (hours>11){
    amPm = "PM";
    if(hours> 12) {
        hours -= 12;
    }
}
hoursElem.innerText = hours;
minutesElem.innerText = date.getMinutes();
secondsElem.innerText = date.getSeconds();
amPmElem.innerText = amPm;

}, 1000);
