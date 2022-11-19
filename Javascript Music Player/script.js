const audio = document.querySelector("audio");
const playPauseBtn = document.querySelector("#play-pause");
const nextBtn = document.querySelector("#next");
const preveBtn = document.querySelector("#previous");
const songList = document.querySelector(".song-list");
const title = document.querySelector("#title");
const record = document.querySelector(".record");
const volSlider = document.querySelector(".slider");

let songArray = [];
let songHeading = "";
let songIndex = 0;
let isPlaying = false;
