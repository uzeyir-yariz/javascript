// * uzeyir-yariz {310720242229} * \\
// > {loadijng-bar}

const progres_count = document.querySelector(".progress-bar-count");
const progress = document.querySelector(".progress");
let count = 0;

window.onload = () => {
  const intervalId = setInterval(() => {
    if (count < 100) {
      count++;
      progres_count.textContent = `${count}%`;
        progress.style.width = `${count}%`
    } else {
        clearInterval(intervalId);
        progress.style.backgroundColor = `#7fff00`
    }
  }, 25);
};

// * uzeyir-yariz {310720242251} * \\
