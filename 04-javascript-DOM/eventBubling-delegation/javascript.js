const btn = document.getElementById("add");
btn.addEventListener("click", (btn) => {
  const li = document.createElement("li");
  li.textContent = "react";
  ul.append(li);
});

const ul = document.getElementById("ul");
console.log(ul.children);

ul.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});

Array.from(ul.children).forEach((li) => {
  li.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log(e.target);
  });
});
