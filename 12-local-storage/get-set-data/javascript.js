// * uzeyir-yariz {300720241239} * \\
// > {get-set-data}

localStorage.setItem("name", "Azura");
localStorage.setItem("age", 25);

let user_name = localStorage.getItem("name") 
let user_ages = localStorage.getItem("age")

console.log(user_name, user_ages);

// altta güncelleme var

localStorage.setItem("name", "Arthur");
localStorage.setItem("age", "19");

user_name = localStorage.getItem("name") 
user_ages = localStorage.getItem("age")

console.log(user_name, user_ages);

// * uzeyir-yariz {300720241245} * \\