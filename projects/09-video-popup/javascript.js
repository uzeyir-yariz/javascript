const video_container = document.getElementById("videoPopup");
const open_popup = document.getElementById("openPopup");
const close_popup = document.getElementById("closePopup");
const video = document.querySelector(".video")

open_popup.addEventListener("click", () => {
  video_container.classList.remove("active");
});

close_popup.addEventListener("click", () => {
  video_container.classList.add("active");
  video.pause();
  video.currentTime = 0;
});

