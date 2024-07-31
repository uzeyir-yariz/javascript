// * uzeyir-yariz {310720241910} * \\
// > {slider}

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slider_cont = document.querySelector(".image-cont");
let count = 0;

console.log();

next.addEventListener("click", () => {
  if (slider_cont.children.length >= count + 2) {
    count++;
    update_photo(count);
  } else {
    count = 0;
    update_photo(count);
  }
});

prev.addEventListener("click", () => {
  if (count > 0) {
    count--;
    update_photo(count);
  } else {
    count = slider_cont.children.length - 1;
    update_photo(count);
  }
});

function update_photo(count) {
  const px = count * 700;
  console.log(px);
  slider_cont.style.cssText = `transform: translatex(-${px}px);`;
}

// yön tuşları ile yaptım
document.addEventListener("keydown", (e) => {
    if(e.key === "ArrowRight"){
        next.click();
    } else if(e.key === "ArrowLeft"){
        prev.click();
    }
})

// * uzeyir-yariz {310720242031} * \\
