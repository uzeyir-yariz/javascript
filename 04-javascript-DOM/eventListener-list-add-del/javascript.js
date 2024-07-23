const btn = document.getElementById("add");
btn.addEventListener("click", (btn) => {
  const li = document.createElement("li");
  li.textContent = "test";
  ul.append(li);
});

const ul = document.getElementById("ul");
console.log(ul.children);

Array.from(ul.children).forEach((li) => {
  li.addEventListener("click", (e) => {
    e.target.remove();
  });
});
