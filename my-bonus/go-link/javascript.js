// * uzeyir-yariz {260720242337} * \\
// > {go-to-link}

const btn = document.getElementById("btn");
const link = "https://www.example.com"; // istediğim siteye gidecek link

btn.addEventListener("click", (btn) => {
  console.log(btn);

  window.location.href = link;
});

// ekran ilk başladığında açılacak kod bu olacak
/* window.addEventListener("load", () => {
    window.location.href = link;
}); */

// * uzeyir-yariz {260720242352} * \\