var currentHour = 0;
var currentMin = 0;
var currentSec = 0;
var currentmilisecond = 0;
var outputHour = document.getElementById("outputHour");
var outputMinute = document.getElementById("outputMinute");
var outputSecond = document.getElementById("outputSecond");
var outputMilisecond = document.getElementById("outputMilisecond");
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var stopWatch;

stopBtn.style.display = "none";
outputHour.innerHTML = "00";
outputMinute.innerHTML = "00";
outputSecond.innerHTML = "00";
outputMilisecond.innerHTML = "00";

function StartClock()
{
    startBtn.style.display = "none";
    stopBtn.style.display = "inline-block";
    stopWatch = setInterval(myClock, 10);
}

function StopClock(){
    startBtn.style.display = "inline-block";
    stopBtn.style.display = "none";
    clearInterval(stopWatch);
}

function ResetClock(){
    StopClock();
    outputHour.innerHTML = "00";
    outputMinute.innerHTML = "00";
    outputSecond.innerHTML = "00";
    outputMilisecond.innerHTML = "00";
    currentHour = 0;
    currentMin = 0;
    currentSec = 0;
}

function myClock()
{
    currentmilisecond++;
    if(currentmilisecond == 100)
    {
        currentmilisecond = 0;
        currentSec++;
        if(currentSec == 60)
        {
            currentSec = 0;
            currentMin++;
            if(currentMin == 60)
            {
                currentMin = 0;
                currentHour++;
                if(currentHour == 24)
                {
                    currentHour = 0;
                }
                outputHour.innerHTML = FormatTime(currentHour);
            }
            outputMinute.innerHTML = FormatTime(currentMin);
        }
        outputSecond.innerHTML = FormatTime(currentSec);
    }  
    outputMilisecond.innerHTML = FormatTime(currentmilisecond);
}

function FormatTime(time)
{
    var formatedTime
    if(time < 10)
    {
        formatedTime = "0" + time.toString();
    }
    else
    {
        formatedTime = time;
    }
    return formatedTime
}