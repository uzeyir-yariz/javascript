// * uzeyir-yariz {290720241325} * \\
// > {callback-problem}

const getTodos = (resource, callback) => {
  const req = new XMLHttpRequest();

  req.addEventListener("readystatechange", () => {
    if (req.readyState === 4 && req.status === 200) {
      const data = JSON.parse(req.responseText); // ! bu kısım JSON çevirmeye yarıyor
      callback(undefined, data);
    } else if (req.readyState === 4) {
      callback("err", undefined);
    }
  });

  req.open("GET", resource);
  req.send();
};

getTodos("json/user.json", (err, data) => {
  console.log(data);
  getTodos("json/car.json", (err, data) => {
    console.log(data);
  });
  getTodos("json/class.json", (err, data) => {
    console.log(data);
  });
});

// * uzeyir-yariz {290720241342} * \\
