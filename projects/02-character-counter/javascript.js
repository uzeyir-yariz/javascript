// * uzeyir-yariz {310720242258} * \\
// > {character-counter}

const text_area = document.querySelector(".text-area");
const text_count = document.querySelector(".user-text-count");
const left_text_count = document.querySelector(".left-text-count"); // 50

text_area.addEventListener("input", () => {
  const character_count = text_area.value.length;
  const character_left = 50 - character_count;

  text_count.textContent = `word: ${character_count}`;
  left_text_count.textContent = `left: ${character_left}`;


});

// * uzeyir-yariz {310720242322} * \\
