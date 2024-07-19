let ogrenci = {
  id: 0,
  ad: "Paul",
  soyad: "Jackson",
  number: 245,
  lesson: [
    {ders: "mat", puan: "90"}, 
    {ders: "edb", puan: "80"}, 
    {ders: "fiz", puan: "100"}
  ],
  login: false,
  checklogin() {
    this.login = true;
  },
  print_lesson() {
    this.lesson.forEach((lesson, index) => {
      console.log(index + " " + lesson.ders + " : " + lesson.puan);
    });
  },
};

ogrenci.print_lesson();