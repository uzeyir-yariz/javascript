const joke_text = document.getElementById("joke_text");
const joke_btn = document.getElementById("joke_btn");

const key = "https://api-ninjas.com"; // hesap açıp key buraya yapıştırmak gerekiyor
const apiURL = "https://api.api-ninjas.com/v1/jokes";
const opt = {
  method: "GET",
  headers: {
    "X-Api-Key": key,
  },
};

// bunu async yapmam gerekiyor sebebi API çekilirken bekleme süresi var onu bekleyene kadar işlem yapılmaması gerekiyor tek tek kodları yazacağım aşağıda ki gibi

async function make_joke() {
  try {
    joke_text.textContent = "ugh...";
    joke_btn.disabled = true;
    joke_btn.textContent = "wait a second...";

    const response = await fetch(apiURL, opt);
    const data = await response.json();
    joke_text.textContent = data[0].joke;

    joke_btn.disabled = false;
    joke_btn.textContent = "tell me a joke";
  } catch (err) {
    joke_text.textContent = "try again later";
  }
}

joke_btn.addEventListener("click", make_joke);
