// * uzeyir-yariz {010820240816} * \\
// > {sidebar}

const menu_show = document.querySelector(".menu-open");
const menu_hide = document.querySelector(".menu-close");
const side_bar = document.querySelector(".sidebar");

menu_show.addEventListener("click", (e) => {
  e.stopPropagation();
  side_bar.style.width = "300px";
});

menu_hide.addEventListener("click", (e) => {
  e.stopPropagation();
  side_bar.style.width = "0";
});

document.addEventListener("click", (e) => {
  if (!side_bar.contains(e.target) && side_bar.style.width === "300px") {
    side_bar.style.width = "0";
  }
});

side_bar.addEventListener("click", (e) => {
    e.stopPropagation();
})

// * uzeyir-yariz {010820240849} * \\
