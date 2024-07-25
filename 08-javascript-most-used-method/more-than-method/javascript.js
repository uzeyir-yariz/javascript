// * uzeyir-yariz {250720241858} * \\
// > {more-than-method}

const students = [
  { name: "Paul", point: 70 },
  { name: "Jack", point: 90 },
  { name: "Kaylee", point: 40 },
  { name: "Azura", point: 100 },
  { name: "Alli", point: 60 },
  { name: "Josh", point: 30 },
  { name: "Arthur", point: 75 },
  { name: "Kyle", point: 45 },
  { name: "Ivan", point: 20 },
];

const pass_students = students.filter((student) => student.point > 50); // geçen öğrenciler
const left_students = students.filter((student) => student.point < 50); // kalan öğrenciler

console.log(`geçen öğrenciler :`, pass_students); 
console.log(`kalan öğrenciler :`, left_students);

const best_student = pass_students.reduce(
  (max, student) => (student.point > max.point ? student : max),
  pass_students[0]
); // * en yüksek notu alan öğrenci
console.log(`en iyi öğrenci : ${best_student.name}`);

const worst_student = left_students.reduce(
  (min, student) => (student.point < min.point ? student : min),
  pass_students[0]
); // * en düşük notu alan öğrenci
console.log(`en kötü öğrenci : ${worst_student.name}`);

const sorted_left_student = left_students.sort((a, b) => a.point - b.point); // kalan öğrenciler notlarını büyükten küçüğe sıralar

const extra_point = 15;
sorted_left_student.slice(0, 3).forEach((student) => { // kalan ilk üç öğrencinin puanını arttırır
  student.point += extra_point;
});

students.sort((a, b) => a.name.localeCompare(b.name)); // tüm öğrencileri alfabetik olarak sıralar

console.log(students);

// * uzeyir-yariz {250720241953} * \\
