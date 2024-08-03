const celsius = document.getElementById("celsius");
const fahrenhayt = document.getElementById("fahrenhayt");
const kelvin = document.getElementById("kelvin");

function calcTemp(e) {
  const currentValue = Number(e.target.value);

  switch (e.target.name) {
    case "celsius":
      fahrenhayt.value = ((currentValue * 9) / 5 + 32).toFixed(2);
      kelvin.value = (currentValue + 273.15).toFixed(2);
      break;
    case "fahrenhayt":
      celsius.value = (((currentValue - 32) * 5) / 9).toFixed(2);
      kelvin.value = (((currentValue - 32) * 5) / 9 + 273.15).toFixed(2);
      break;
    case "kelvin":
      celsius.value = (currentValue - 273.15).toFixed(2);
      fahrenhayt.value = ((currentValue - 273.15) * 9 / 5 + 32).toFixed(2)
      break;
    default:
      break;
  }
}
