var a;
var b = 0;
var lgBreak = 0;

function change() {
  pomoTimer.play();
  let divMenu = document.getElementById("menu");
  divMenu.classList = "menuChange";
  let para = document.getElementById("h2");
  para.classList = "invisible";
}
function rechange() {
  let divMenu1 = document.getElementById("menu1");
  divMenu1.classList = "menuVisible1";
  let para1 = document.getElementById("h2-1");
  para1.classList = "visible";
}

function startBreak() {
  if (a == b) {
    console.log("function already running");
    warnSound.play();
    document.getElementById("message").innerHTML = "Timer Already Running";
    setTimeout(function () {
      document.getElementById("message").innerHTML = "";
    }, 5000);
  } else {
    a = setInterval(timerBreak, 1000);
    console.log("time", a);
    b = a;
  }
} /* Start */

function stopBreak() {
  clearInterval(a);
  b++;
} /* Stop */

var sec1 = 59; /* holds decrementing value */
if (userMin == 0) {
  var min1 = breakMin;
} else {
  var min1 = breakMin - 1; // teasttingggggggggg
}
//testingggggggg otherwise its 5

/* Contains and outputs returned value of  function checkTime */

var secOut1 = 0;
var minOut1 = 0;

/* Output variables */

function timerBreak() {
  /* Main Timer */

  secOut1 = checkTime(sec1);
  minOut1 = checkTime(min1);

  sec1--;
  document.getElementById("sec").innerHTML = secOut1;
  if (sec1 == 00 && min1 > 0) {
    min1 = min1 - 1;
    sec1 = 59;
  }
  console.log(min1);
  console.log(sec1);
  if (min1 == 00 && sec1 == 00) {
    //break return call to start again
    console.log("Break is Over");
    lgBreak = lgBreak + 1;
    breakTime.play();
    stopBreak();
    stop();
    resetBreak();
    startOver();
    reset();
  }
  console.log(secOut1);
  document.getElementById("min").innerHTML = minOut1;
}

/* Adds 0 when value is <10 */

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function resetBreak() {
  /*Reset*/

  sec1 = 59;
  min1 = 00; /////testingggggggggg
  hour1 = 0;

  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "05";
  /* reset(); */
}

function myFunction(a) {
  var element = document.body;
  element.classList.toggle("light-header-footer");
  a.classList.toggle("fa-moon-o");
}

function startOver() {
  let divMenu = document.getElementById("menu");
  divMenu.classList = "menuVisible";
  let divMenu1 = document.getElementById("menu1");
  divMenu1.classList = "menuChange";
  let para = document.getElementById("h2");
  para.classList = "visible";
  let para1 = document.getElementById("h2-1");
  para1.classList = "invisible";
  reset();
  stopBreak();
  /* resetBreak(); */
}
