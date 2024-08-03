// rastgele şifre için
const random_btn = document.getElementById("random-generator");
const random_text = document.getElementById("password-text");

// alert kısmı için
const copy = document.getElementById("copy");
const alerts = document.getElementById("alert");

// tıklama olayları
random_btn.addEventListener("click", createRandomPassword);
copy.addEventListener("click", copy_func);

// options
const user_length = document.getElementById("user_length");
const include_uppdercase = document.getElementById("include-uppdercase");
const include_lowercase = document.getElementById("include-lowercase");
const include_numbers = document.getElementById("include-numbers");
const include_symbols = document.getElementById("include-symbols");

function copy_func() {
  if (random_text.value.length > 0) {
    navigator.clipboard.writeText(random_text.value);
    alerts.classList.remove("active");
    setTimeout(() => {
      alerts.classList.add("active");
    }, 1000);
  } else {
    console.log("nope");
  }
}

function createRandomPassword() {
  const password_length = Number(user_length.value);
  let characters = character_options();

  let password = "";
  for (let i = 0; i < password_length; i++) {
    const random_number = Math.floor(Math.random() * characters.length);
    password += characters[random_number];
  }

  if (random_text.value.length <= 0) {
    add_password_char(password);
  } else {
    clear_password_char();

    setTimeout(() => {
      add_password_char(password);
    }, 1000);
  }
}

function character_options() {
  let character = "";
  if (include_uppdercase.checked) {
    character += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (include_lowercase.checked) {
    character += "abcdefghijklmnopqrstuvwxyz";
  }
  if (include_numbers.checked) {
    character += "0123456789";
  }
  if (include_symbols.checked) {
    character += "!@#$%^&*()";
  }
  if (character === "") {
    alert("Please select at least one character type");
    return;
  } else {
    return character;
  }
}

function add_password_char(password) {
  let add_index = 0;
  const add_intervalID = setInterval(() => {
    random_text.value += password[add_index];
    add_index++;
    if (add_index >= password.length) {
      clearInterval(add_intervalID);
    }
  }, 50);
}

function clear_password_char() {
  let clear_index = random_text.value.length;
  const clear_intervalID = setInterval(() => {
    random_text.value = random_text.value.slice(0, clear_index - 1);
    clear_index--;
    if (clear_index <= 0) {
      clearInterval(clear_intervalID);
    }
  }, 50);
}
