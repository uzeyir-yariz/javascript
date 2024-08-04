const weather_form = document.getElementById("form");
const city = document.getElementById("city");
const apiKey = "784740c9e49fe3b15a37f42a32e05d8f";

const weather = document.getElementById("weather"); // contanier
const icon_div = document.getElementById("icon");
const temperature_div = document.getElementById("temperature");
const details_div = document.getElementById("details"); // array olan
const description = document.getElementById("description");

weather_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city_value = city.value;
  get_weather(city_value);
});

async function get_weather(city_value) {
  try {
    description.textContent = ""

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city_value}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();
    console.log(data);

    const temperature = Math.round(data.main.temp);
    const icon = data.weather[0].icon;
    const details = [
      `hissedilen: ${Math.round(data.main.feels_like)}`,
      `nem oranı: ${data.main.humidity}%`,
      `rüzgar: ${data.wind.speed} m/s`,
    ];

    icon_div.innerHTML = `<img src="https://api.openweathermap.org/img/wn/${icon}.png" alt="weather icon">`; // ! icon bulunamadı
    temperature_div.innerHTML = temperature;

    details.forEach((item) => {
      const span = document.createElement("span");
      span.textContent = item;
      details_div.appendChild(span);
    });
  } catch (err) {
    temperature_div.innerHTML = "";
    details.innerHTML = "";
    icon_div.innerHTML = "";
    description.textContent = "lütfen geçerli bir şehir seçin"
  }
}
