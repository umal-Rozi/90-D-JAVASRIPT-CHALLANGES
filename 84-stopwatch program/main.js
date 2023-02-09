
const timeDisplay = document.querySelector("#timeDisplay");
const startbtn= document.querySelector("#startbtn");
const pausebtn= document.querySelector("#pausebtn");
const resttbtn= document.querySelector("#resttbtn");

let startTime=0;
let elepsedTime =0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startbtn.addEventListener("click", () => {
    if (paused) {
      paused= false;
        startTime = Date.now() - elepsedTime;
        intervalId = setInterval(updateTime, 75);
    }
});
pausebtn.addEventListener("click", () => {});
resttbtn.addEventListener("click", () => {});

function updateTime() {
    elepsedTime.Date.now() - startTime;

    secs =Math.floor((elepsedTime / 1000) % 60);
    mins =Math.floor((elepsedTime / (1000 * 60)) % 60);
    hrs =Math.floor((elepsedTime / (1000 * 60 *60)) % 60);

    secs =pad(secs);
    mins =pad(mins);
    hrs =pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return(("0") +unit).length > 2 ? unit : "0" + unit;
    }
}