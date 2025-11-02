const songs = [
  { title: "kali shakti", artist: "Ed Sheeran", src: "C:\Users\dell\OneDrive\Desktop\music-dashboard\song\Khoobsurat From Ek Deewane Ki Deewaniyat Original Motion Picture Soundtrack-320kbps\Kali Shakti-320kbps.mp3", cover: "images/cover1.jpg" },
  { title: "Khoobsurat", artist: "The Weeknd", src: "C:\Users\dell\OneDrive\Desktop\music-dashboard\song\Khoobsurat From Ek Deewane Ki Deewaniyat Original Motion Picture Soundtrack-320kbps\Khoobsurat From Ek Deewane Ki Deewaniyat Original Motion Picture Soundtrack-320kbps.mp3", cover: "images/cover2.jpg" },
  { title: "Ul Jalool", artist: "Ed Sheeran", src: "C:\Users\dell\OneDrive\Desktop\music-dashboard\song\Khoobsurat From Ek Deewane Ki Deewaniyat Original Motion Picture Soundtrack-320kbps\Ul Jalool Ishq From Gustaakh Ishq-320kbps.mp3", cover: "images/cover3.jpg" }
];

let index = 0;
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const time = document.getElementById("time");

function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  cover.src = song.cover;
  audio.src = song.src;
}

function playSong() {
  audio.play();
  playBtn.innerHTML = '<i class="fa fa-pause"></i>';
}

function pauseSong() {
  audio.pause();
  playBtn.innerHTML = '<i class="fa fa-play"></i>';
}

let isPlaying = false;
playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
  isPlaying = !isPlaying;
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % songs.length;
  loadSong(songs[index]);
  playSong();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(songs[index]);
  playSong();
});

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;
  let cur = Math.floor(audio.currentTime / 60) + ":" + String(Math.floor(audio.currentTime % 60)).padStart(2, "0");
  let dur = Math.floor(audio.duration / 60) + ":" + String(Math.floor(audio.duration % 60)).padStart(2, "0");
  time.textContent = `${cur} / ${dur}`;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

volume.addEventListener("input", () => {
  audio.volume = volume.value;
});

loadSong(songs[index]);
