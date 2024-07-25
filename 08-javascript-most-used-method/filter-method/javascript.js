const points = [70, 50, 45, 25, 45, 20, 78, 65, 41, 15];

// yeni bir değişken aldım burada filtreledim falan
const std_past = points.filter((point) => point >= 50); // tek satırda yazılmış hali

/* const std_past = points.filter((point) => {
  return point >= 50; // 50'den büyükse geç
});*/

console.log(std_past);

const students = [
  { name: "Paul", passed: true },
  { name: "John", passed: false },
  { name: "Mary", passed: true },
  { name: "Peter", passed: false },
  { name: "Jane", passed: true },
];

const passing_student = students.filter((student) => {
  return student.passed;
  // return student.passed;   true ise
  // return !student.passed;  false ise
});

console.log(passing_student);
