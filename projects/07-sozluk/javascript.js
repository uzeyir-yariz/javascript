// inputs
const word = document.getElementById("word");
const translete = document.getElementById("translete"); // tıklama işlemleri burada olacak

// outputs
const translateDiv = document.getElementById("translateDiv"); // display: block; olacak
const title = document.getElementById("title");
const meaning = document.getElementById("meaning");
const audio = document.getElementById("audio");

translete.addEventListener("click", () => {
  if (word.value.trim().length > 0) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("network hatası");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);

        title.textContent = data[0].word;
        meaning.textContent = data[0].meanings[0].definitions[0].definition;

        if (
          data[0].phonetics &&
          data[0].phonetics.length > 0 &&
          data[0].phonetics[0].audio
        ) {
          audio.setAttribute("src", data[0].phonetics[0].audio);
          audio.style.display = "block";
        } else {
          audio.style.display = "none";
        }
        translateDiv.style.display = "flex";
      })
      .catch((err) => console.error(err));
  } else {
    alert("lütfen boş alanı doldurun");
  }
});
