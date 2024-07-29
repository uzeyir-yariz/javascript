// * uzeyir-yariz {290720241851} * \\
// > {promise}

const getTodos = (resource, callback) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.addEventListener("readystatechange", () => {
      if (req.readyState === 4 && req.status === 200) {
        const data = JSON.parse(req.responseText); // ! bu kısım JSON çevirmeye yarıyor
        resolve(data);
      } else if (req.readyState === 4) {
        reject("hatalı");
      }
    });

    req.open("GET", resource);
    req.send();
  });
};

getTodos("json/user.json")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// ! -------------------------------

// const getIt = () => {
//   return new Promise((resolve, reject) => {
//     resolve("✔");
//     reject("❌");
//   });
// };

// getIt()
//   .then((data) => {
//     console.log("başarılı", data);
//   })
//   .catch((err) => {
//     console.log("başarısız data", err);
//   });

// getIt().then(data => {
//   console.log("başarılı", data)
// },err => {
//   console.log("başarısız", err)
// })

// * uzeyir-yariz {290720241342} * \\
