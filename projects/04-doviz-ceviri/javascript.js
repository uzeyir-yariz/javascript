// selects
const select_first = document.getElementById("select_first_currency");
const select_second = document.getElementById("select_second_currency");

// user input
const count = document.getElementById("currency_input");

// result input
const result = document.getElementById("currency_result");
const exchange = document.getElementById("exchange");

update_exchange();

function update_exchange() {
  fetch(
    `https://v6.exchangerate-api.com/v6/8e3ce05e5560710830dc0796/latest/${select_first.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const rate = data.conversion_rates[select_second.value];

      result.textContent = (count.value * rate).toFixed(2);

      exchange.textContent = `1 ${select_first.value} = ${rate} ${select_second.value}`
    });
}

count.addEventListener("change", update_exchange);
select_first.addEventListener("change", update_exchange);
select_second.addEventListener("change", update_exchange);
