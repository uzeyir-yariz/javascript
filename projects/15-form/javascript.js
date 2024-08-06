const form = document.getElementById("form");

const password = document.getElementById("password");
const re_password = document.getElementById("re-password");

const alert_title = document.getElementById("alert-title");
const alert_mesage = document.getElementById("mesage");

let isValid = false;
let match = false;

form.addEventListener("submit", submit_form);

function submit_form(e){
  e.preventDefault()
  validate_form();
}

function send_user_information(){
  const user = {
    name: form.name.value,
    sur_name: form.sur_name.value,
    email: form.email.value,
    password: form.password.value,
    address: form.address.value,
  }
  console.log(user);
}

function validate_form(){
  isValid = form.checkValidity();

  if(!isValid){
    alert_title.textContent = "lütfen tüm alanları doldurunuz"
    alert_title.style.color = "red"
    alert_mesage.style.borderColor = "red"
    return;
  }

  if(password.value === re_password.value){
    password.style.borderColor = "green";
    re_password.style.borderColor = "green";
    match = true;
  } else{
    match = false;
    password.style.borderColor = "red";
    re_password.style.borderColor = "red";
    alert_title.textContent = "şifreleriniz eşleşmiyor"
    alert_title.style.color = "red"
    alert_mesage.style.borderColor = "red"
    return;
  }

  if(isValid && match){
    alert_title.textContent = "kaydoldunuz"
    alert_title.style.color = "green"
    alert_mesage.style.borderColor = "green"
    send_user_information();
  }
}