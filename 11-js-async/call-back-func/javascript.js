// * uzeyir-yariz {290720241253} * \\
// > {call-back-func}

/*
    algoritma
    1. `getTodos` fonksiyonu tanımlanır ve bir `callback` fonksiyonu alır.
    2. `XMLHttpRequest` nesnesi (`req`) oluşturulur.
    3. `readystatechange` olayına bir dinleyici eklenir:
       - İstek durumu `readyState` 4 (tamamlandı) olduğunda:
         - Durum kodu `status` 200 (başarılı) ise `callback` fonksiyonu çağrılır.
         - Başka bir durum kodunda da (örneğin hata durumları) `callback` fonksiyonu çağrılır.
    4. `req.open("GET", ...)` ile bir GET isteği hazırlanır.
    5. İstek, `req.send()` ile gönderilir.
    6. `getTodos` fonksiyonu çağrıldığında, boş bir `callback` fonksiyonu ile çalışır.
*/

const getTodos = (callback) => {
  const req = new XMLHttpRequest();

  req.addEventListener("readystatechange", () => {
    if (req.readyState === 4 && req.status === 200) {
      callback(undefined, req.responseText);
    } else if (req.readyState === 4) {
      callback("err", undefined);
    }
  });

  req.open("GET", "https://jsonplaceholder.typicode.com/todos");
  req.send();
};

console.log(1)
console.log(2)

// `getTodos` fonksiyonunu çağırıyoruz ve boş bir callback fonksiyonu sağlıyoruz.
getTodos((err, data) => {
    // console.log(err, data)
    if(err){ // hata var mı ?
        console.log(err) // varsa hatayı yazdır
    } else{
        console.log(data) // yoksa datayı yazdır
    }
});

console.log(3)
console.log(4)


// * uzeyir-yariz {290720241316} * \\
