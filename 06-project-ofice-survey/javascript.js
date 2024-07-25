const true_answer = ["E", "E", "E", "E"];
const result = document.getElementById("result");
const form = document.getElementById("main-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let point = 0;
  const user_answer = [
    form.quest_1.value,
    form.quest_2.value,
    form.quest_3.value,
    form.quest_4.value,
  ];

  user_answer.forEach((answer, i) => {
    if (answer === true_answer[i]) {
      point++;
    }
  });

  const percentage = (point / true_answer.length) * 100;
  result.textContent = `${Math.floor(percentage.toFixed(2))}%`;

  if(point >= 2){
    result.setAttribute("class", "text-success")
} else{
    result.setAttribute("class", "text-danger")
  }
});
