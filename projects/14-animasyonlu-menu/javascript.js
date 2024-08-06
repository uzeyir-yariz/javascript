const menu_bar = document.getElementById("menu-bar");
const overlay = document.getElementById("overlay");

const navHome = document.getElementById("navHome");
const navAbout = document.getElementById("navAbout");
const navServices = document.getElementById("navServices");
const navPrices = document.getElementById("navPrices");
const navContact = document.getElementById("navContact");

const nav_items = [navHome, navAbout, navServices, navPrices, navContact];

menu_bar.addEventListener("click", toggle_nav);

nav_items.forEach((nav) => {
  nav.addEventListener("click", toggle_nav);
});

function toggle_nav() {
  menu_bar.classList.toggle("change");
  overlay.classList.toggle("overlay-active");

  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    nav_animation("out", "in");
  } else {
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    nav_animation("in", "out");
  }
}

function nav_animation(direction_1, direction_2){
  nav_items.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction_1}-${i + 1}`, `slide-${direction_2}-${i + 1}`
    )
  })
}