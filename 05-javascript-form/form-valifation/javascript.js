const signup_form = document.querySelector(".sign-form");
const box_mesage = document.querySelector(".mesage");

signup_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = signup_form.username.value;
  const username_pattern = /^[a-z]{6,10}$/;

  if (username_pattern.test(username)) {
    box_mesage.innerHTML = null;
  } else{
    box_mesage.innerHTML = "Username must be between 6 and 10 characters long and can";
  }
});

/* 
  bu projede yaptığım şey input username'den alıp bir kontrol edip sonra ona göre mesaj yazdırmaktı başka bir yöntem daha var ama bunuda görmek istedim
*/