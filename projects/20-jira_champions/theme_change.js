const theme_toggle = document.getElementById("theme-toggle");
const bodyElement = document.querySelector("body");
const theme_toggle_icon_container = document.getElementById("theme-toggle-icon-container");

if (localStorage.getItem("theme") === "dark") {
  bodyElement.classList.add("dark-mode");
  theme_toggle_icon_container.children[0].classList.add("active");
  theme_toggle_icon_container.children[1].classList.remove("active");
}

theme_toggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-mode");

  if (bodyElement.classList.contains("dark-mode")) {  
    localStorage.setItem("theme", "dark");
    theme_toggle_icon_container.children[0].classList.add("active");
    theme_toggle_icon_container.children[1].classList.remove("active");
  } else {
    localStorage.setItem("theme", "light");
    theme_toggle_icon_container.children[1].classList.add("active");
    theme_toggle_icon_container.children[0].classList.remove("active");
  }
});
