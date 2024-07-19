let ogrenci = {
  id: 0,
  ad: "Paul",
  soyad: "Jackson",
  number: 245,
  lesson: ["mat", "edb", "fiz"],
  login: false,
  checklogin() {
    this.login = true;
  },
};

console.log(ogrenci.login);
ogrenci.checklogin();
console.log(ogrenci.login);
