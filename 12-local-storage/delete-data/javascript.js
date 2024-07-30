// * uzeyir-yariz {300720241250} * \\
// > {delete-data}

localStorage.setItem("name", "Azura");
localStorage.setItem("age", 25);

let user_name = localStorage.getItem("name");   // data çağırıyorum
let user_ages = localStorage.getItem("age");    // data çağırıyorum

console.log(user_name, user_ages);

// tek bir item silme işlemi
localStorage.removeItem("age"); // belli bir itemi silmek için

user_name = localStorage.getItem("name");   // data çağırıyorum
user_ages = localStorage.getItem("age");    // data çağırıyorum

console.log(user_name, user_ages);

// tüm itemleri silme işlemi
localStorage.clear();

user_name = localStorage.getItem("name");   // data çağırıyorum
user_ages = localStorage.getItem("age");    // data çağırıyorum

console.log(user_name, user_ages);

/*ayrıca F12 komutu ile console'dan App sekmeye gidip localStorage açıp yazılanlara bakabiliriz*/

// * uzeyir-yariz {300720242100} * \\
