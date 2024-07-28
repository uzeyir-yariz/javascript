// * uzeyir-yariz {280720241358} * \\
// > {todo-search}

const todo_add = document.querySelector(".add");
const list = document.querySelector(".todos");
const mesage = document.querySelector(".mesage");
const search = document.querySelector(".search input"); // .searh altında ki input seçiyor
const searchForm = document.querySelector(".search"); // .searh altında ki input seçiyor

// * add kısmı
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
  checky_empty_list();
});

// * delete kısmı
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    checky_empty_list();
  }
});

// * check
const checky_empty_list = () => {
  if (list.children.length === 0) {
    mesage.style.display = "block";
  } else {
    mesage.style.display = "none";
  }
};

// * search kısmı
const filter_todo = (term) => {
  // console.log(list.children);
  // console.log(Array.from(list.children));

  Array.from(list.children).forEach((todo) => {
    const isVisible = todo.textContent
      .trim()
      .toLowerCase()
      .includes(term.toLowerCase());
    todo.classList.toggle("filter_show", isVisible);
    todo.classList.toggle("filter_none", !isVisible);
  });
};

search.addEventListener("keyup", (e) => {
  const term = e.target.value.trim().toLowerCase();
  filter_todo(term);
});

searchForm.addEventListener("submit", (e) => e.preventDefault()); // submit engelleme

// * uzeyir-yariz {280720241440} * \\
