

const startButton = document.querySelector ('button');
const selectSeconds = document.querySelector ('select');
const seconds = selectSeconds.value;
const mililSeconds = seconds * 1000;
let playAgain;
 

let displayNumberOfPressesLeft = document.querySelector ('.counterLeft');
let displayNumberOfPressesRight = document.querySelector ('.counterRight');
let countS = 0;
let countL = 0;


let gameStarted = false;

startButton.addEventListener ('click', function () {
  const numberOfSeconds = selectSeconds.value;
  const mililSeconds = numberOfSeconds * 1000;
  gameStarted = true;

  startGame ();
  startCountdown (numberOfSeconds);
  stopCountingKeyPres (mililSeconds);
});


function stopCountingKeyPres (delayTime) {
  setTimeout (() => {
    gameStarted = false;
  }, delayTime);
}


function startGame () {
  const numberOfSeconds = selectSeconds.value;
  const mililSeconds = numberOfSeconds * 1000;
  startAnimation ();
  document.addEventListener ('keydown', event => {
    let key = event.key.toLowerCase ();
    if (gameStarted === true) {
      if (key === 's') {
        countS++;
        displayNumberOfPressesLeft.innerHTML = countS;
      } else if (key === 'l') {
        countL++;
        displayNumberOfPressesRight.innerHTML = countL;
      }
    }

    replay (mililSeconds);
    getMostCounts (mililSeconds);
    showTheWinner (mililSeconds);
  });
}


function startCountdown (seconds) {
  let counter = seconds;
  span = document.getElementById ('countdown');
  setInterval (function () {
    counter--;
    if (counter >= 0) {
      span.innerHTML = counter + ' seconds left';
    }
    if (counter === 0) {
      span.innerHTML = 'Time is over';
      clearInterval (counter);
    }
  }, 1000);
}


function getMostCounts (delayTime) {
  setTimeout (() => {
    if (countS > countL) {
      winner = 's';
    } else if (countS < countL) {
      winner = 'l';
    } else {
      winner = 'both';
    }
    return winner;
  }, delayTime);
}

function replay (delayTime) {
  setTimeout (() => {
    startButton.innerHTML = 'Play again!';
  }, delayTime);
}


const pressKeySignLeft = document.querySelector ('h2.pressS');
const pressKeySignRight = document.querySelector ('h2.pressL');

pressKeySignLeft.style.webkitAnimationPlayState = 'paused';
pressKeySignRight.style.webkitAnimationPlayState = 'paused';

function startAnimation () {
  pressKeySignLeft.style.webkitAnimationPlayState = 'running';
  pressKeySignRight.style.webkitAnimationPlayState = 'running';
}

function showTheWinner (delayTime) {
  setTimeout (() => {
    if (winner === 's') {
      displayNumberOfPressesLeft.innerHTML =
        countS + '<br /> Congratulations <br /> You won!';
      displayNumberOfPressesLeft.style.color = '#ff80b3';
    } else if (winner === 'l') {
      displayNumberOfPressesRight.innerHTML =
        countL + '<br /> Congratulation <br /> You won!';
      displayNumberOfPressesRight.style.color = '#ff80b3';
    } else {
      displayNumberOfPressesLeft.innerHTML = countS + "<br /> It's a draw!";
      displayNumberOfPressesRight.innerHTML = countL + "<br /> It's a draw!";
    }
  }, delayTime);
}

