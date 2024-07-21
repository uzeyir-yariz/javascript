// https://github.com/uzeyir-yariz
const link = document.getElementById("spe_link_change");
console.log(link.getAttribute("href")); // href artribute yazdırdım
link.setAttribute("href", "https://github.com/uzeyir-yariz");
link.textContent = "uzeyir-yariz";
console.log(link.getAttribute("href")); // değiştirdim

const head = document.getElementById("spe_head");
head.textContent = "this changed";
head.style.cssText =
  "color: red; text-transform: uppercase; background-color: black; padding: 20px;";

const contenier = document.querySelector(".content"); // ! uyarı queryselector kullanılırken class yazdığında . koymayı unutma yoksa sorun çıkıyor
contenier.textContent = "changed";
