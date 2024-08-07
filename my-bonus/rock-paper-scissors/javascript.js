const user = {
  user_choice: document.getElementById("user_choice"),
  user_score: document.getElementById("user_score"),
  user_choices: [
    document.getElementById("user_rock"),
    document.getElementById("user_paper"),
    document.getElementById("user_scissors"),
  ],
};

const CPU = {
  CPU_choice: document.getElementById("CPU_choice"),
  CPU_score: document.getElementById("CPU_score"),
  CPU_choices: [
    document.getElementById("CPU_rock"),
    document.getElementById("CPU_paper"),
    document.getElementById("CPU_scissors"),
  ],
};

const choices = {
  rock: {name: "Rock", win:["scissors"]},
  paper: {name: "Paper", win:["rock"]},
  scissors: {name: "Scissors", win:["paper"]}
}

const container = document.querySelector(".container");

const user_won = document.getElementById("user_won");
const CPU_won = document.getElementById("CPU_won");
const draw = document.getElementById("draw");

const result = document.getElementById("result_text");
const ALLicons = document.querySelectorAll(".icon");
const game_reset = document.querySelectorAll(".game_reset");
let CPU_choice_display;
let user_score_num = 0;
let CPU_score_num = 0;

game_reset.forEach(el_reset => {
  el_reset.addEventListener("click", reset_all);
})

function reset_all(){
  user_score_num = 0;
  CPU_score_num = 0;

  user.user_score.textContent = "0";
  CPU.CPU_score.textContent = "0";

  user.user_choice.textContent = "";
  CPU.CPU_choice.textContent = "";

  result.textContent = "";
  stopConfetti(); 

  user_won.hidden = true
  CPU_won.hidden = true
  draw.hidden = true

  container.hidden = false

  reset_select();
}

function select(player_choice) {

  check_result(player_choice);

  switch (player_choice) {
    case "rock":
      user.user_choices[0].classList.add("selected");
      user.user_choice.textContent = "--- taş";
      break;
    case "paper":
      user.user_choices[1].classList.add("selected");
      user.user_choice.textContent = "--- kağıt";
      break;
    case "scissors":
      user.user_choices[2].classList.add("selected");
      user.user_choice.textContent = "--- makas";
      break;
    default:
      break;
  }
}

function reset_select(){
  ALLicons.forEach((icon) => icon.classList.remove("selected"));
  stopConfetti();
}

function update_score(player_choice){
  if(player_choice === CPU_choice_display){
    result.textContent = "berabere";
    result.style.color = "black";
  } else{
    const choice = choices[player_choice]
    
    if(choice.win.indexOf(CPU_choice_display) === 0){
      user_score_num++;
      user.user_score.textContent = user_score_num;
      result.style.color = "blue";
      result.textContent = "USER kanazdı"
    } else{
      CPU_score_num++;
      CPU.CPU_score.textContent = CPU_score_num;
      result.style.color = "red";
      result.textContent = "CPU kanazdı"
    }

    if(user_score_num === 3){
      startConfetti();
      container.hidden = true;
      user_won.hidden = false;
    } else if(CPU_score_num === 3){
      container.hidden = true;
      CPU_won.hidden = false;
    }
  }
}

function check_result(player_choice){
  reset_select();
  CPU_random_chose();
  CPU_display_choice();
  update_score(player_choice)
}

function CPU_random_chose(){
  const CPU_random_chose_num = Math.floor(Math.random() * 3);

  if(CPU_random_chose_num === 0){
    CPU_choice_display = "rock"
  } else if(CPU_random_chose_num === 1){
    CPU_choice_display = "paper"
  } else{
    CPU_choice_display = "scissors"
  }
}

function CPU_display_choice() {
  switch (CPU_choice_display) {
    case "rock":
      CPU.CPU_choices[0].classList.add("selected");
      CPU.CPU_choice.textContent = "--- taş";
      break;
    case "paper":
      CPU.CPU_choices[1].classList.add("selected");
      CPU.CPU_choice.textContent = "--- kağıt";
      break;
    case "scissors":
      CPU.CPU_choices[2].classList.add("selected");
      CPU.CPU_choice.textContent = "--- makas";
      break;
    default:
      break;
  }
}

