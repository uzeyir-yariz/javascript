// * uzeyir-yariz start {250720241751} * \\

const points = [70, 50, 45, 25, 45, 20, 78, 65, 41, 15];

const result = points.reduce((val, point) => {
  if (point > 50) {
    val++;
  }
  return val;
}, 0);

console.log(result);

const students = [
  { name: "Paul", point: 20 },
  { name: "John", point: 70 },
  { name: "Mike", point: 80 },
  { name: "Alex", point: 90 },
  { name: "Mike", point: 40 },
];

const students_total = students.reduce((val, student) => {
    if(student.name === "Mike"){
        val += student.point;
    }
    return val;
},0);

console.log(students_total);

// * uzeyir-yariz ended {250720241802} * \\
