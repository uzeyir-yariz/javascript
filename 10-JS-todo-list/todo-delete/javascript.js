// * uzeyir-yariz {280720241112} * \\
// > {todo-delete}

const todo_add = document.querySelector(".add");
const list = document.querySelector(".todos");
const mesage = document.querySelector(".mesage");

const generator_li = (todo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center bg-info mb-4">
        <span>${todo}</span>
        <i class="fa-solid fa-trash delete btn btn-danger"></i>
    </li>
  `;

  list.innerHTML += html;
};

todo_add.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = e.target.querySelector("input[name='add_list']");

  if (todo.value.trim().length > 0) {
    mesage.style.display = "none";
    generator_li(todo.value.trim());
    todo_add.reset();
  }
});

// * delete kısmı

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    if (list.innerHTML.trim() === "") {
      console.log(mesage);
      mesage.style.display = "block";
    }
  }
});

// * uzeyir-yariz {280720241356} * \\
