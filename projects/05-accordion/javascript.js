const accordions = document.querySelectorAll(".accordion");

console.log(accordions)

accordions.forEach((accordion) => {
    accordion.querySelector("button").addEventListener("click", () => {
        accordion.querySelector(".plus").classList.toggle("active");
        accordion.querySelector(".minus").classList.toggle("active");

        accordion.querySelector(".accordionText").classList.toggle("active");
    })
})