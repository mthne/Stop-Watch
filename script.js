const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const hoursElement = document.getElementById("hours");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("second");
const milliSecondElement = document.getElementById("millisecond");

let hours = 0;
let minute = 0;
let second = 0;
let milliSecond = 0;
let timer;
let isTimerRunning = false;

function updateTimer() {
  milliSecond++;
  if (milliSecond / 100 == 1) {
    milliSecond = 0;
    second++;
  }
  if (second / 60 == 1) {
    second = 0;
    minute++;
  }
  if (minute / 60 == 1) {
    minute = 0;
    hours++;
  }
  minuteElement.textContent = minute < 10 ? "0" + minute : minute;
  hoursElement.textContent = hours < 10 ? "0" + hours : hours;
  secondElement.textContent = second < 10 ? "0" + second : second;
  milliSecondElement.textContent =
    milliSecond < 10 ? "0" + milliSecond : milliSecond;
}

function updateMilliSeconds() {
  milliSecondElement.style.fontSize = "40px";
  setTimeout(() => {
    milliSecondElement.style.fontSize = "30px";
  }, 100);
}
function startTimer() {
  if (!isTimerRunning) {
    timer = setInterval(updateTimer, 10);
    isTimerRunning = true;
  }
}
function stopTimer() {
  if (isTimerRunning) {
    clearInterval(timer);
    isTimerRunning = false;
  }
}
function resetTimer() {
  clearInterval(timer);
  hours = 0;
  minute = 0;
  second = 0;
  milliSecond = 0;
  hoursElement.textContent = "00";
  minuteElement.textContent = "00";
  secondElement.textContent = "00";
  milliSecondElement.textContent = "00";
}

function toggleTimer() {
  if (this.id === "start") {
    startTimer();
  } else if (this.id === "stop") {
    stopTimer();
  } else if (this.id === "reset") {
    resetTimer();
  }
}

startBtn.addEventListener("click", toggleTimer);
stopBtn.addEventListener("click", toggleTimer);
resetBtn.addEventListener("click", toggleTimer);
