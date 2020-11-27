var x;
var y = 0;
function start() {
  if (x == y) {
    console.log("function already running");
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

var sec = 10; /* holds decrementing value */
var min = 00; // teasttingggggggggg

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
    stop();
    change();
    rechange();
    startBreak();
  }
  console.log(secOut);
  document.getElementById("min").innerHTML = minOut;
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
  min = 24;
  hour = 0;

  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "25";
}

function myFunction(x) {
  var element = document.body;
  element.classList.toggle("light-header-footer");
  x.classList.toggle("fa-moon-o");
}
