const fill_container = document.getElementById("fill");

for (let i = 0; i <= 25; i++) {
  const fill_p = document.createElement("p");
  fill_p.textContent = "lorem ipsum";
  fill_container.append(fill_p);
}

const mouse_area = document.getElementById("mouse-area");
const coordinate = document.getElementById("coordinate");

mouse_area.addEventListener("mousemove", (e) => {
  coordinate.textContent = `${e.offsetX} / ${e.offsetY}`;
});

document.addEventListener("wheel", (e) => {
  console.log(e.pageX, e.pageY);
});
