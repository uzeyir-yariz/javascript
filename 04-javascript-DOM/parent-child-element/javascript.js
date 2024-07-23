const my_main = document.getElementById("my_main");

// console.log(my_main);
// console.log(my_main.children);
// console.log(Array.from(my_main.children));

Array.from(my_main.children).forEach((child) => {
  child.classList.add("main-child");
});

// console.log(my_main);
// foreach ile yapmaya çalıştığımda htmlColection olduğu için hata alırım bunu dizi değişkene çevirmem gerekiyor

const head = document.getElementById("my_head");
// console.log(head);
console.log(head.parentElement); // parent element
console.log(head.parentElement.parentElement);
console.log(head.nextElementSibling); // bir sonraki kardeş
console.log(head.previousElementSibling); // bir önceki kardeş

console.log(head.nextElementSibling.parentElement);