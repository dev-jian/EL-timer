import { timer } from './timer.js';

const playBtn = document.querySelector('button.start');
const resetBtn = document.querySelector('button.reset');
const flexContainer = document.querySelector('.flex-container');
const modeContainer = document.querySelector('.mode-container');
const menuBtn = document.querySelector('.toggle');

// Event Listeners
// init timer
document.addEventListener('DOMContentLoaded', initTimer);

// click event for start or pause button
playBtn.addEventListener('click', playTimer);

// click event for reset button
resetBtn.addEventListener('click', resetTimer);

// click event for change mode
modeContainer.addEventListener('click', changeMode);

// click event for menu
menuBtn.addEventListener('click', clickMenu);

// init timer
function initTimer() {
  timer.init();
}

// play or stop
function playTimer(e) {
  e.preventDefault();

  if (e.target.classList.contains('start')) {
    // timer start
    timer.start();
  } else {
    timer.pause();
  }
}

// reset timer
function resetTimer(e) {
  e.preventDefault();

  timer.reset();
}

// change mode to focus or rest
function changeMode(e) {
  let targetMode = e.target.getAttribute('for');

  if (targetMode !== null) {
    timer.changeMode(targetMode);
  }
}

// menu button
function clickMenu(e) { 
  if (flexContainer.classList.contains('menu-show')) {
    flexContainer.classList.remove('menu-show');
    menuBtn.firstElementChild.classList.remove('fa-times');
    menuBtn.firstElementChild.classList.add('fa-bars');
  } else {
    flexContainer.classList.add('menu-show');
    menuBtn.firstElementChild.classList.remove('fa-bars');
    menuBtn.firstElementChild.classList.add('fa-times');
  }
  
}