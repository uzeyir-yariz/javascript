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
  print_lesson() {
    this.lesson.forEach((lesson, index) => {
      console.log(index + " " + lesson);
    });
    console.log(this.lesson);
  },
};

ogrenci.print_lesson();
