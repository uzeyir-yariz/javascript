const user = [
    "yus",
    "uzy",
    "efe"
];

let list = document.querySelector(".list");

user.forEach((user, index) => {
    let li = document.createElement("li");
    li.innerHTML = user + " " + index;
    list.appendChild(li);
});