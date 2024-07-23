const form = document.querySelector(".sign-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form.username.value);
});
