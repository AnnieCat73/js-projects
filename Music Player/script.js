const music = new Audio("audio/Pray - Anno Domini Beats.mp3");
//music.play();

//Create Array
const songs = [
  {
    id: "1",
    songName: `On My Way <br>
    <div class="subtitle">Cat</div>`,
    poster: "images/edgar-nKC772R_qog-unsplash (1).jpg",
  },
  {
    id: "2",
    songName: `Silly Love Songs <br>
    <div class="subtitle">Alan Walker</div>`,
    poster: "images/pexels-jonathan-borba-3076516.jpg",
  },
  {
    id: "3",
    songName: `Hello <br>
    <div class="subtitle">Alan Walker</div>`,
    poster: "images/pexels-karolina-grabowska-4498553.jpg",
  },
  {
    id: "4",
    songName: `Fade <br>
    <div class="subtitle">Alan Walker</div>`,
    poster: "images/16104017791582534645-128.png",
  },
  {
    id: "5",
    songName: `Shout <br>
    <div class="subtitle">Alan Walker</div>`,
    poster: "images/kike-vega-F2qh3yjz6Jk-unsplash.jpg",
  },
  {
    id: "6",
    songName: `Billy Jack <br>
    <div class="subtitle">Alan Walker</div>`,
    poster: "images/edgar-nKC772R_qog-unsplash (1).jpg",
  },
  {
    id: "7",
    songName: `Kittycat <br>
    <div class="subtitle">Alan Walker</div>`,
    poster: "images/edgar-nKC772R_qog-unsplash (1).jpg",
  },
  {
    id: "8",
    songName: `Kat <br>
    <div class="subtitle">Alan Walker</div>`,
    poster: "images/cat2.jpg",
  },
  {
    id: "9",
    songName: `Dollar <br>
    <div class="subtitle">Alan Walker</div>`,
    poster: "images/16104017791582534645-128.png",
  },
  {
    id: "10",
    songName: `Cat <br>
    <div class="subtitle">Alan Walker</div>`,
    poster: "images/cat.jpg",
  },
  {
    id: "11",
    songName: `Kitty <br>
    <div class="subtitle">Alan Walker</div>`,
    poster: "images/edgar-nKC772R_qog-unsplash (1).jpg",
  },
  {
    id: "12",
    songName: `Dog <br>
    <div class="subtitle">Alan Walker</div>`,
    poster: "images/pexels-jonathan-borba-3076516.jpg",
  },
  {
    id: "13",
    songName: `Sheep <br>
    <div class="subtitle">Alan Walker</div>`,
    poster: "images/kike-vega-F2qh3yjz6Jk-unsplash.jpg",
  },
  {
    id: "14",
    songName: `Fox <br>
    <div class="subtitle">Alan Walker</div>`,
    poster: "images/cat.jpg",
  },
  {
    id: "15",
    songName: `Kittycat <br>
    <div class="subtitle">Alan Walker</div>`,
    poster: "images/edgar-nKC772R_qog-unsplash (1).jpg",
  },
];

/*Array.from(document.getElementsByClassName("song-item")).forEach(
  (element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].poster;
    element.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
  }
);*/
//Play song at bottom??

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementsByClassName("wave")[0];
/*from addEventListener down*/
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
});

const makeAllPlays = () => {
  Array.from(document.querySelectorAll(".playListPlay")).forEach((element) => {
    element.classList.add("bi-play-circle-fill");
    element.classList.remove("bi-pause-circle-fill");
  });
};

let index = 0;
/**/
let posterMasterPlay = document.getElementById("poster-master-play");
let title = document.getElementById("title");
/** */
Array.from(document.querySelectorAll(".playListPlay")).forEach((element) => {
  element.addEventListener("click", (e) => {
    index = e.target.id;
    makeAllPlays();
    e.target.classList.remove("bi-play-circle-fill");
    e.target.classList.add("bi-pause-circle-fill");
    music.src = `audio/${index}.mp3`;

    //*May not use
    //posterMasterPlay.src = `/images/${index}.jpg`;
    music.play();
    /*let songTitle = songs.filter((ele) => {
      return ele.id == index;
    });
    songTitle.forEach((ele) => {
      let { songName } = ele;
      title.innerHTML = songName;
    });
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
    music.addEventListener("ended", () => {
      masterPlay.classList.add("bi-pause-fill");
      masterPlay.classList.remove("bi-pause-fill");
      wave.classList.remove("active2");
    });*/
  });
});
