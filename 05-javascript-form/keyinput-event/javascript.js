const signup_form = document.querySelector(".sign-form");
const box_mesage = document.querySelector(".mesage");

signup_form.username.addEventListener("keyup", (e) => {
  const username_pattern = /^[a-z]{6,10}$/;

  if (username_pattern.test(e.target.value)) {
    e.target.setAttribute("class", "suc")
  } else {
    e.target.setAttribute("class", "err")
  }
});

// bu projede anlık olarak tepki veren bir sistem ayarladım