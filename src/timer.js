class Timer {
  constructor(inputFocus, inputRest) {
    this.inputFocus = inputFocus;
    this.inputRest = inputRest;
    this.mode = 'focus';
    this.time = 0;
    this.intervalId = null;

    this.UISelectors = {
      timerUI: document.querySelector('#time'),
      playBtn: document.querySelector('.start')
    }
  }

  render() {
    let min = Math.floor(this.time / 60);
    if (min < 10) min = '0' + min;

    let sec = this.time % 60;
    if (sec < 10) sec = '0' + sec;

    // render
    this.UISelectors.timerUI.textContent = `${min}:${sec}`;
  }

  init() {
    if (this.mode == 'focus') {
      this.time = this.inputFocus;
    } else if(this.mode == 'rest') {
      this.time = this.inputRest;
    }

    document.querySelector(`.mode[value="${this.mode}"]`).setAttribute('checked', true);

    this.render();
  }

  start() {
    this.render();
    this.intervalId = setInterval(() => {
      this.time = this.time - 1;
      this.render();
      if (this.time === 0) {
        clearInterval(this.intervalId);
        alarms.create('test', null);
      }
    }, 1000);

    // change start button to pause button
    this.UISelectors.playBtn.innerHTML = '<i class="fas fa-pause"></i> pause';
    this.UISelectors.playBtn.classList.remove('start');
    this.UISelectors.playBtn.classList.add('pause');
  }

  pause() {
    clearInterval(this.intervalId);

    // change pause button to start button
    this.UISelectors.playBtn.innerHTML = '<i class="fas fa-play"></i> start';
    this.UISelectors.playBtn.classList.remove('pause');
    this.UISelectors.playBtn.classList.add('start');
  }

  reset() {
    this.pause();
    this.init();
    this.render();
  }

  changeMode(targetMode) {
    this.mode = targetMode;
    
    this.pause();
    this.init();
    this.render();
  }
}

export const timer = new Timer(1800, 5);