const columns = document.querySelectorAll(".drag-item-list");

const add_btns = document.querySelectorAll(".add-btn:not(.update)");
const saved_btns = document.querySelectorAll(".add-btn.update");
const add_containers = document.querySelectorAll(".add-container");
const add_items = document.querySelectorAll(".add-item");

const todo_list = document.getElementById("todo-list");
const progress_list = document.getElementById("inProgress-list");
const done_list = document.getElementById("done-list");

let todo_list_arr = [];
let progress_list_arr = [];
let done_list_arr = [];
let list_arrs = [];

let drag_item;
let current_column;
let updated_onload = false;
let draging = false;

function get_saved_columns() {
  if (localStorage.getItem("todo_items")) {
    todo_list_arr = JSON.parse(localStorage.getItem("todo_items"));
    progress_list_arr = JSON.parse(localStorage.getItem("progress_items"));
    done_list_arr = JSON.parse(localStorage.getItem("done_items"));
  } else {
    todo_list_arr = ["todo-0", "todo-1"];
    progress_list_arr = ["progress-0", "progress-1"];
    done_list_arr = ["done-0", "done-1"];
  }
}

function update_saved_columns() {
  list_arrs = [todo_list_arr, progress_list_arr, done_list_arr];
  const array_names = ["todo", "progress", "done"];

  array_names.forEach((arr_name, index) => {
    localStorage.setItem(`${arr_name}_items`, JSON.stringify(list_arrs[index]));
  });
}

function filter_arr(arr) {
  return arr.filter((item) => item !== null);
}

function update_DOM() {
  if (!updated_onload) {
    get_saved_columns();
  }

  todo_list.textContent = "";
  todo_list_arr.forEach((todo_item, index) => create_item(todo_list, 0, todo_item, index));
  todo_list_arr = filter_arr(todo_list_arr);

  progress_list.textContent = "";
  progress_list_arr.forEach((progress_item, index) => create_item(progress_list, 1, progress_item, index));
  progress_list_arr = filter_arr(progress_list_arr);

  done_list.textContent = "";
  done_list_arr.forEach((done_item, index) => create_item(done_list, 2, done_item, index));
  done_list_arr = filter_arr(done_list_arr);

  updated_onload = true;
  update_saved_columns();
}

function drag(e) {
  drag_item = e.target;
  draging = true;
}

function allow_drop(e) {
  e.preventDefault();
}

function drag_enter(column) {
  current_column = column;
  columns[column].classList.add("over");
}

function drop(e) {
  e.preventDefault();
  const parent = columns[current_column];

  parent.appendChild(drag_item);
  drag_end(); // Bunu appendChild işleminden sonra çağırdım
  draging = false;

  update_inside_arrs();
}

function drag_end() {
  columns.forEach((col) => {
    col.classList.remove("over");
  });
}

function update_inside_arrs() {
  todo_list_arr = [];
  for (let i = 0; i < todo_list.children.length; i++) {
    todo_list_arr.push(todo_list.children[i].textContent);
  }

  progress_list_arr = [];
  for (let i = 0; i < progress_list.children.length; i++) {
    progress_list_arr.push(progress_list.children[i].textContent);
  }

  done_list_arr = [];
  for (let i = 0; i < done_list.children.length; i++) {
    done_list_arr.push(done_list.children[i].textContent);
  }

  // Burada update_DOM() çağrısını kaldırdım çünkü gerek yok
  update_saved_columns(); // Sadece localStorage güncellenmeli
}

function create_item(column_item, column, item, index) {
  const list_item = document.createElement("li");
  list_item.classList.add("drag-item");
  list_item.draggable = true;

  list_item.setAttribute("ondragstart", "drag(event)");
  list_item.setAttribute("onfocusout", `update_item(${index}, ${column})`);

  list_item.contentEditable = true;

  list_item.textContent = item;
  column_item.appendChild(list_item);
}

function update_item(id, column) {
  if (!draging) {
    const selected_arr = list_arrs[column];
    const selected_column = columns[column].children;

    if (!selected_column[id].textContent) {
      selected_arr.splice(id, 1); // delete yerine splice kullandım
    } else {
      selected_arr[id] = selected_column[id].textContent;
    }

    update_DOM();
  }
}

function show_item_div(column) {
  add_btns[column].style.visibility = "hidden";
  add_containers[column].style.display = "flex";
  saved_btns[column].style.display = "flex";
}

function hide_item_div(column) {
  add_btns[column].style.visibility = "visible";
  add_containers[column].style.display = "none";
  saved_btns[column].style.display = "none";

  add_to_column(column);
}

function add_to_column(column) {
  const item = add_containers[column].children[0].textContent;
  const selected_arr = list_arrs[column];
  selected_arr.push(item);
  add_containers[column].children[0].textContent = "";
  update_DOM();
}

update_DOM();
