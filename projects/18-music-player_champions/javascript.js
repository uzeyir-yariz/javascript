const music = document.querySelector("audio");

// btn
const prev_btn = document.getElementById("prev");
const play_btn = document.getElementById("play");
const next_btn = document.getElementById("next");


const music_img = document.querySelector("img");
const music_title = document.getElementById("title")
const music_creator = document.getElementById("creator")

// progress
const progress_container = document.getElementById("progress_container")
const progress = document.getElementById("progress")
const progress_fill = document.getElementById("progress_fill")

// time
const current_time = document.getElementById("current_time");
const total_time = document.getElementById("total_time");

const songs = [
  {
    name: "bootstrap",
    title: "bootstrap eğitimi",
    creator: "Can Boz",
  },
  {
    name: "c",
    title: "C eğitimi",
    creator: "Can Boz",
  },
];

let is_play = false;
let music_index = 0;

play_btn.addEventListener("click", () =>
  is_play ? pause_music() : play_music()
);

function load_music(song){
  music_title.textContent = song.title;
  music_creator.textContent = song.creator;
  music.src = `./music/${song.name}.mp3`
  music_img.src = `./images/${song.name}.png`
}

load_music(songs[music_index]);

function play_music() {
  is_play = true;
  music.play();

  play_btn.classList.replace("fa-play", "fa-pause");
}
function pause_music() {
  is_play = false;
  play_btn.classList.replace("fa-pause", "fa-play");
  music.pause();
}

prev_btn.addEventListener("click", prev_music);
next_btn.addEventListener("click", next_music);
music.addEventListener("timeupdate", update_progress_bar)
music.addEventListener("ended", next_music)
progress.addEventListener("click", set_progress_bar)

function next_music(){
  if(songs.length > music_index + 1){
    music_index++
  } else{music_index = 0;}

  load_music(songs[music_index])
  play_music();
}

function prev_music(){
  if(music_index > 0){
    music_index--;
  } else{music_index = songs.length - 1;}
  load_music(songs[music_index])
  play_music();

} 

function update_progress_bar(e){
  if(is_play){
    const {currentTime, duration} = e.srcElement
    const progress_percent = (currentTime / duration) * 100; // yüzdelik hesaba getirdik
    progress_fill.style.width = `${progress_percent}%`;

    // current
    const current_min = Math.floor(currentTime / 60);
    let current_second = Math.floor(currentTime % 60);

    if(current_second < 10){
      current_second = `0${current_second}`
    }
    if(current_second){
      current_time.textContent = `${current_min}:${current_second}`
    }

    // duration
    const duration_min = Math.floor(duration / 60);
    let duration_second = Math.floor(duration % 60);

    if(duration_second < 10){
      duration_second = `0${duration_second}`
    }
    if(duration_second){
      total_time.textContent = `${duration_min}:${duration_second}`
    }
  }
}

function set_progress_bar(e){
  const width = e.srcElement.clientWidth;
  const click_x = e.offsetX;
  const {duration} = music

  music.currentTime = (click_x / width) * duration;
}