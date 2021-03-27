let startBtn = document.querySelector(".startClock");
let pauseBtn = document.querySelector(".pauseClock");
let stopBtn = document.querySelector(".stopClock");


let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;



function stopWatch(){
    
    seconds++;

    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();

    } else {
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();

    } else {
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();

    } else {
        displayHours = hours;
    }

    



    document.querySelector(".clock__stopwatch1").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

startBtn.addEventListener("click", function(){
    stopWatch();
    interval = setInterval(stopWatch, 1000);
});

stopBtn.addEventListener("click", function(){
   window.clearInterval(interval);
   seconds = 0;
   minutes = 0;
   hours = 0;
document.querySelector(".clock__stopwatch1").innerHTML = "00:00:00";
    document.querySelector()
});
