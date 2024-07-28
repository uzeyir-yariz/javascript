// * uzeyir-yariz {280720241940} * \\
// > {todo-reborn}

const form_add = document.querySelector(".add");
const list = document.querySelector(".todo_list");
const mesage = document.querySelector(".mesage");
const search = document.querySelector(".search");

// * yeni eleman ekleyen kod
const generator_li = (todo) => {
  list.innerHTML += `
    <li class="list-group-item d-flex justify-content-between">
        <p> ${todo} </p>
        <i class="fa-solid fa-trash btn text-danger delete"></i>
    </li>
  `;
};

// * listeye yeni eleman ekliyor
form_add.addEventListener("submit", (e) => {
  e.preventDefault();

  const term = e.target.add_text;

  if (term.value.trim().length > 0) {
    generator_li(term.value);
    form_add.reset();
    check_empty();
  } else {
    alert("boş görev atanamaz");
  }
});

// * silmek için kullanmak gereken
list.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    check_empty();
  }
});

// * listenin boş olmasını kontrol eden şey
const check_empty = () => {
  if (list.children.length === 0) {
    mesage.style.display = "block"
  } else{
    mesage.style.display = "none"
  }
}

// * filter
const filter = (filtered) => {
  Array.from(list.children).forEach((todo) => {
    const isVisible = todo.textContent
      .trim()
      .toLowerCase()
      .includes(filtered);

      todo.classList.toggle("d-flex", isVisible);
      todo.classList.toggle("d-none", !isVisible);
  });
}

search.addEventListener("keyup", (e) => {
  const term = e.target.value.trim().toLowerCase();
  filter(term);
});

// * uzeyir-yariz {280720242245} * \\
