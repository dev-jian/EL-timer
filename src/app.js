import { timer } from './timer.js';

const playBtn = document.querySelector('button.start');
const resetBtn = document.querySelector('button.reset');
const flexContainer = document.querySelector('.flex-container');
const modeContainer = document.querySelector('.mode-container');
const menuBtn = document.querySelector('.toggle');

// settings modal
const settingsModal = document.querySelector('#settings-modal');
const settingsBtn = document.querySelector('#settings-btn');
const settingsSaveBtn = document.querySelector('#save-settings');

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

// click event for open settings modal
settingsBtn.addEventListener('click', openSettingsModal)

// click event for close modal
document.querySelector('.close').addEventListener('click', closeModal);

// click event for save settings
settingsSaveBtn.addEventListener('click', saveSettings);

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

// open settings modal
function openSettingsModal() {
  settingsModal.style.display = 'flex';
  
  document.querySelector('#setting-focus').value = timer.settings.focus / 60;
  document.querySelector('#setting-rest').value = timer.settings.rest / 60;
}

// close modal
function closeModal(e) {
  const parentModal = e.target.parentElement.parentElement.parentElement;
  parentModal.style.display = 'none';
}

// save settings
function saveSettings(e) {
  const inputFocus = document.querySelector('#setting-focus').value;
  const inputRest = document.querySelector('#setting-rest').value;

  const settings = {
    focus: inputFocus * 60,
    rest: inputRest * 60
  }

  timer.changeSettings(settings);

  const parentModal = e.target.parentElement.parentElement.parentElement;
  parentModal.style.display = 'none';
}