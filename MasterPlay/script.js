const music = new Audio("audio/Pray - Anno Domini Beats.mp3");

let masterPlay = document.getElementById("masterPlay");

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
  } else {
    music.pause();
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
  }
});

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let musicCurr = music.currentTime;
  let musicDur = music.duration;

  let min = Math.floor(musicDur / 60);
  let sec = Math.floor(musicDur % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }

  currentEnd.innerText = `${min}:${sec}`;

  let min1 = Math.floor(musicCurr / 60);
  let sec1 = Math.floor(musicCurr % 60);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }

  currentStart.innerText = `${min1}:${sec1}`;

  let progressbar = parseInt((music.currentTime / music.duration) * 100);
  seek.value = progressbar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

music.addEventListener("ended", () => {
  masterPlay.classList.add("bi-play-fill");
  masterPlay.classList.remove("bi-pause-fill");
});

let volIcon = document.getElementById("vol-icon");
let vol = document.getElementById("vol");
let volDot = document.getElementById("vol-dot");
let volBar = document.getElementsByClassName("vol-bar")[0];

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    volIcon.classList.remove("bi-volume-down-fill");
    volIcon.classList.add("bi-volume-mute-fill");
    volIcon.classList.remove("bi-volume-up-fill");
  }
  if (vol.value > 0) {
    volIcon.classList.add("bi-volume-down-fill");
    volIcon.classList.remove("bi-volume-mute-fill");
    volIcon.classList.remove("bi-volume-up-fill");
  }
  if (vol.value > 50) {
    volIcon.classList.remove("bi-volume-down-fill");
    volIcon.classList.remove("bi-volume-mute-fill");
    volIcon.classList.add("bi-volume-up-fill");
  }

  let volA = vol.value;
  volBar.style.width = `${volA}%`;
  volDot.style.left = `${volA}%`;
  music.volume = volA / 100;
});

/*
let masterPlay = document.getElementById("masterPlay");
//let wave = document.getElementsByClassName("wave")[0];
/*from addEventListener down*
console.log(masterPlay);
masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
  } else {
    music.pause();
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
    wave.classList.remove("active2");
  }
});*/
