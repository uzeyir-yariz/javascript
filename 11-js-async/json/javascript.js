// * uzeyir-yariz {290720241318} * \\
// > {json}

const getTodos = (callback) => {
  const req = new XMLHttpRequest();

  req.addEventListener("readystatechange", () => {
    if (req.readyState === 4 && req.status === 200) {
      const data = JSON.parse(req.responseText); // ! bu kısım JSON çevirmeye yarıyor
      callback(undefined, data);
    } else if (req.readyState === 4) {
      callback("err", undefined);
    }
  });

  req.open("GET", "https://jsonplaceholder.typicode.com/todos");
  req.send();
};

getTodos((err, data) => {
  // console.log(err, data)
  if (err) {
    // hata var mı ?
    console.log(err); // varsa hatayı yazdır
  } else {
    console.log(data); // yoksa datayı yazdır
  }
});

// * uzeyir-yariz {date} * \\
