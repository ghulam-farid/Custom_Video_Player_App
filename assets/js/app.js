const video = document.querySelector("#video");
const play_btn = document.querySelector("#play");
const stop_btn = document.querySelector("#stop");
const progress_bar = document.querySelector("#progress");
const timestamps = document.querySelector("#timestamps");

video.addEventListener("click", (e) => toggleVideoStatus());
video.addEventListener("pause", (e) => updatePlayIcon());
video.addEventListener("play", (e) => updatePlayIcon());
video.addEventListener("timeupdate", (e) => updateProgress());

play_btn.addEventListener("click", (e) => toggleVideoStatus());
stop_btn.addEventListener("click", (e) => stopVideo());

progress_bar.addEventListener("change", (e) => setVideoProgress());

const toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const updatePlayIcon = () => {
   if (video.paused) {
      play_btn.innerHTML = '<i class="fa-solid fa-play fa-2x"></i>';
  } else {
    play_btn.innerHTML = '<i class="fa-solid fa-pause fa-2x"></i>';
  }
};

const updateProgress = () => {
   progress_bar.value = (video.currentTime / video.duration*100);
   let minutes = Math.floor(video.currentTime / 60);
   if (minutes < 10) {
       minutes = "0" + String(minutes);
   }
   let seconds = Math.floor(video.currentTime % 60);
   if(seconds < 10) {
       seconds = "0" + String(seconds);
   }
   timestamps.innerHTML = `${minutes}:${seconds}`;
};

const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};

const setVideoProgress = () => {
   video.currentTime = (+progress_bar.value * video.duration) / 100;
}