// * uzeyir-yariz {270720242348} * \\
// > {todo-add}

const todo_add = document.querySelector(".add");
const list = document.querySelector(".todos");

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
    generator_li(todo.value.trim());
    todo_add.reset();
  }
});
// trim solda ki ve sağda ki boşlukları siler

// * uzeyir-yariz {280720240017} * \\
