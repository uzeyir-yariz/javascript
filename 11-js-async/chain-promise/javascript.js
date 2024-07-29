// * uzeyir-yariz {290720241937} * \\
// > {chain-promise}

const getTodos = (resource, callback) => {
  return new Promise((resolve, reject) => {

    const req = new XMLHttpRequest();

    req.addEventListener("readystatechange", () => {
      if (req.readyState === 4 && req.status === 200) {
        const data = JSON.parse(req.responseText); // ! bu kısım JSON çevirmeye yarıyor
        resolve(data);
      } 
      
      else if (req.readyState === 4) {
        reject("hatalı");
      }
    });

    req.open("GET", resource);
    req.send();
  });
};

// * chain promise
getTodos("json/user.json")
  .then((data) => {
    console.log("promise 1", data);
    return getTodos("json/car.json") // bozulursa diğer olanları yok olur
  }).then((data) => {
    console.log("promise 2", data);
    return getTodos("json/class.json")
  }).then((data) => {
    console.log("promise 3", data);
  }).catch((err) => {
    console.log(err);
  });

// * uzeyir-yariz {} * \\
