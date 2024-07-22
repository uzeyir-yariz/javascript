const Alert = document.querySelectorAll(".alert");
// console.log(Alert[0]);

// Alert.forEach((e) => {
//   console.log(` class olanlar > ${e.classList} `);
// });

const err = document.querySelector(".err");
const suc = document.querySelector(".suc");
const emp = document.querySelector(".emp");

emp.classList.add("suc");
emp.classList.remove("emp");

const ekle = document.getElementById("ekle");
ekle.classList.add("suc");

const all_prag = document.querySelectorAll("p");
// console.log(all_prag);

all_prag.forEach((p) => {
  if (p.textContent.includes("success")) {
    p.classList.add("suc");
  } else if (p.textContent.includes("error")) {
    p.classList.add("err");
  } else {
    p.classList.add("empty");
  }
});
