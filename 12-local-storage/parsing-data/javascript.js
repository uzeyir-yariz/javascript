// * uzeyir-yariz {300720242101} * \\
// > {parsing-data}

const user_data = [
  { name: "Azura", surname: "Krya", age: 19 },
  { name: "Arthur", surname: "Pack", age: 22 },
  { name: "Paul", surname: "Jackson", age: 20 },
  { name: "Kaylee", surname: "Miller", age: 17 },
];

const string_data = JSON.stringify(user_data);      // array string dataya çevirdim

localStorage.setItem("user", string_data);          // localStorage "user" adlı iteme atadım 

const storage_data = localStorage.getItem("user");  // "storage_data" adlı değişkeni "user" adlı itemden çekiyorum  

const parse_data = JSON.parse(storage_data);        // "storage_dara" JSON formata dönüştürüp "parse_data" adlı değişkene atıyorum

console.log(parse_data);                            // "parse_data" adlı değişkeni yazdırıyorum

// * uzeyir-yariz {300720242115} * \\
