var x;
var y = 0;
var s = 0;
const userMin = prompt("Enter Countdown/pomodoro time in Minutes", "25");

const breakMin = prompt("Enter Break time in Minutes", "05");
document.getElementById("min").innerHTML = userMin;
document.getElementById("sec").innerHTML = "00";
reset();

function start() {
  if (x == y) {
    console.log("function already running");
    warnSound.play();
    document.getElementById("message").innerHTML = "Timer Already Running";
    setTimeout(function () {
      document.getElementById("message").innerHTML = "";
    }, 5000);
  } else {
    x = setInterval(timer, 1000);
    console.log("time", x);
    y = x;
  }
} /* Start */

function stop() {
  clearInterval(x);
  y++;
} /* Stop */

var sec = 59; /* holds decrementing value */
if (userMin == 0) {
  var min = userMin;
} else {
  var min = userMin - 1; // teasttingggggggggg
}
/* Contains and outputs returned value of  function checkTime */

var secOut = 0;
var minOut = 0;

/* Output variables */

function timer() {
  /* Main Timer */

  secOut = checkTime(sec);
  minOut = checkTime(min);

  sec--;
  document.getElementById("sec").innerHTML = secOut;
  if (sec == 00 && min > 0) {
    min = min - 1;
    sec = 59;
  }
  console.log(min);
  console.log(sec);
  if (min == 00 && sec == 00) {
    /* stop();
    reset(); */
    //call to break timer logic
    s = s + 1;
    if (s == 1) {
      stop();
      change();
      rechange();
      startBreak();
    }
  }
  console.log(secOut);
  document.getElementById("min").innerHTML = minOut;

  s = 0;
}

/* Adds 0 when value is <10 */

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function reset() {
  /*Reset*/
  let divMenu = document.getElementById("menu");
  divMenu.classList = "menuVisible";
  let divMenu1 = document.getElementById("menu1");
  divMenu1.classList = "menuChange";
  sec = 59;
  min = userMin - 1;
  hour = 0;

  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = userMin;
}

function myFunction(x) {
  var element = document.body;
  element.classList.toggle("light-header-footer");
  x.classList.toggle("fa-moon-o");
}

function takeBreak() {
  let divMenu = document.getElementById("menu");
  divMenu.classList = "menuChange";
  let divMenu1 = document.getElementById("menu1");
  divMenu1.classList = "menuVisible";
  let para = document.getElementById("h2");
  para.classList = "invisible";
  let para1 = document.getElementById("h2-1");
  para1.classList = "visible";
  resetBreak();
  stopBreak();
  /* resetBreak(); */
}
reset();
