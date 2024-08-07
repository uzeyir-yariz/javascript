// kapasyıcılar
const remaing = document.getElementById("remaing");
const time_container = document.getElementById("time_container");
const complete = document.getElementById("complete");

// düğmeler
const start = document.getElementById("hesapla");
const reset_btn = document.getElementById("reset");
const complete_btn = document.getElementById("complete_btn");

// formlar
const remaing_form = document.getElementById("remaing_form");
const date_input = document.getElementById("date_picker");

// time html
const timers = [
  document.getElementById("days_spa"),
  document.getElementById("hours_spa"),
  document.getElementById("minutes_spa"),
  document.getElementById("seconds_spa"),
];

// özel değişkenler
const min_date = new Date().toISOString().split("T")[0];
date_input.setAttribute("min", min_date);
let chose_date = "";
let current_date = new Date().getTime();
let current_time_inter_val;
let local_storage_time;

// tarih ayarları
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

remaing_form.addEventListener("submit", calculator_time)
reset_btn.addEventListener("click", reset)
complete_btn.addEventListener("click", reset)

function calculator_time(e){
  e.preventDefault()

  if(date_input.value){
    chose_date = date_input.value;
    
    local_storage_time = {
      date: chose_date
    }

    localStorage.setItem("time", JSON.stringify(local_storage_time))

    current_date = new Date(chose_date).getTime();
    update_DOM();

  } else{alert("lütfen tarih seçin")}
}

function update_DOM(){
  current_time_inter_val = setInterval(() => {
    const now = new Date().getTime();
    const diff_date = current_date - now;

    const days = Math.floor(diff_date / day);
    const hours = Math.floor((diff_date % day) / hour);
    const minutes = Math.floor((diff_date % hour) / minute);
    const seconds = Math.floor((diff_date % minute) / second);
  
    remaing.hidden = true;

    if(diff_date < 0){
      complete.hidden = false;
      clearInterval(current_time_inter_val);
    } else{
      time_container.hidden = false;
      timers[0].textContent = days;
      timers[1].textContent = hours;
      timers[2].textContent = minutes;
      timers[3].textContent = seconds;
    }
    
  },1000)
}

function reset(){
  clearInterval(current_time_inter_val);
  remaing.hidden = false;
  complete.hidden = true;
  time_container.hidden = true;
  localStorage.removeItem("time")
}

function refresh_time(){
  if(localStorage.getItem("time")){
    remaing.hidden = true;
    local_storage_time = JSON.parse(localStorage.getItem("time"));
    chose_date = local_storage_time.date;
    current_date = new Date(chose_date).getTime();
    update_DOM();
  }
}

refresh_time();