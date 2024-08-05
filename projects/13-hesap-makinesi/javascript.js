const calculator_title = document.querySelector("h1");
const btns = document.querySelectorAll("button");
const reset_button = document.getElementById("resetButton");

let initialVal = 0;
let operatorVal = "";
let isWaiting = false;

reset_button.addEventListener("click", resetAll);
btns.forEach((btn) => {
  if (btn.classList.length === 0) {
    btn.addEventListener("click", () => send_number_value(btn.value));
  } else if (btn.classList.contains("operator")) {
    btn.addEventListener("click", () => use_operator(btn.value));
  } else if (btn.classList.contains("decimal")) {
    btn.addEventListener("click", () => add_decimal());
  }
});

function use_operator(operator) {
  const current_value = Number(calculator_title.textContent);

  if (operatorVal && isWaiting) {
    operatorVal = operator;
    return;
  }

  if (!initialVal) {
    initialVal = current_value;
  } else {
    const calculation = calc[operatorVal](initialVal, current_value);
    calculator_title.textContent = calculation;
    initialVal = calculation;
  }

  isWaiting = true;
  operatorVal = operator;
}

function resetAll() {
  calculator_title.textContent = "0";
  isWaiting = false;
  initialVal = 0;
  operatorVal = "";
}

function add_decimal() {
  if (!calculator_title.textContent.includes(".")) {
    calculator_title.textContent = `${calculator_title.textContent}.`;
  }
}

function send_number_value(num) {
  if (isWaiting) {
    calculator_title.textContent = num;
    isWaiting = false;
  } else {
    const display_value = calculator_title.textContent;
    calculator_title.textContent =
      display_value === "0" ? num : display_value + num;
  }
}

const calc = {
  '/': (first_num, second_num) => first_num / second_num,
  '*': (first_num, second_num) => first_num * second_num,
  '+': (first_num, second_num) => first_num + second_num,
  '-': (first_num, second_num) => first_num - second_num,
  '=': (first_num, second_num) => second_num,
}
