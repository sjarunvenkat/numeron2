const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const num3 = document.getElementById("number3");

// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
function randomize(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function createRandom() {
  // Iteration 3: Creating variables required to make the game functional
  var random1 = randomize(0, 100);
  var random2 = randomize(0, 100);

  num1.innerHTML = random1;
  num2.innerHTML = random2;

  // Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
  var sum = random1 + random2;
  var sub = random1 - random2;
  var mul = random1 * random2;
  var div = Math.floor(random1 / random2);
  var mod = random1 % random2;

  var res = [sum, sub, mul, div, mod];

  // Iteration 5: Creating a randomize function to make the game functional
  function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  var ran_res = getRandomElement(res);
  var ran_ind = res.indexOf(ran_res);
  localStorage.setItem("ran_ind", ran_ind);
  num3.innerHTML = ran_res;
}
createRandom();

// Iteration 6: Making the Operators (button) functional
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("mul");
const divide = document.getElementById("divide");
const modulus = document.getElementById("modulus");

var score = 0;

plus.onclick = () => {
  if (localStorage.getItem("ran_ind") == 0) {
    score++;
    resetTime(timerId);
  } else {
    location.href = "./gameover.html";
  }
  createRandom();
};

minus.onclick = () => {
  if (localStorage.getItem("ran_ind") == 1) {
    score++;
    resetTime(timerId);
  } else {
    location.href = "./gameover.html";
  }
  createRandom();
};

multiply.onclick = () => {
  if (localStorage.getItem("ran_ind") == 2) {
    score++;
    resetTime(timerId);
  } else {
    location.href = "./gameover.html";
  }
  createRandom();
};

divide.onclick = () => {
  if (localStorage.getItem("ran_ind") == 3) {
    score++;
    resetTime(timerId);
  } else {
    location.href = "./gameover.html";
  }
  createRandom();
};

modulus.onclick = () => {
  if (localStorage.getItem("ran_ind") == 4) {
    score++;
    resetTime(timerId);
  } else {
    location.href = "./gameover.html";
  }
  createRandom();
};

// Iteration 7: Making Timer functional
var time = 5;
var timer = document.getElementById("timer");
var timerId;

function startTimer() {
  time = 5;
  timer.innerHTML = time;
  timerId = setInterval(() => {
    time--;
    if (time == 0) {
      location.href = "./gameover.html";
    }
    timer.innerHTML = time;
  }, 1000);
  localStorage.setItem("score", score);
}

function resetTime(intervalId) {
  clearInterval(intervalId);
  startTimer();
}

startTimer();
