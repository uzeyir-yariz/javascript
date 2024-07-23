const show_popup = document.querySelector(".show-popup");
const popup_main = document.querySelector(".popup-main");
const close_popup = document.querySelector(".popup-close");

show_popup.addEventListener("click", () => {
  popup_main.style.display = "flex";
});

close_popup.addEventListener("click", () => {
  popup_main.style.display = "none";
});

// burada ki kod önemli 
popup_main.addEventListener("click", (e) => {
  if (e.target.className === "popup-main") {
    popup_main.style.display = "none";
  }
});
