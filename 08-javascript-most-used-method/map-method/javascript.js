// * uzeyir-yariz {250720241741} * \\

const points = [70, 50, 45, 25, 45, 20, 78, 65, 41, 15];

// herkese + 20 ekleyen kod
const new_point = points.map((point) => {
  return point + 20;
});
console.log(new_point);

const students = [
  { name: "Paul", point: 20 },
  { name: "John", point: 70 },
  { name: "Mike", point: 80 },
  { name: "Alex", point: 90 },
];

// * önemli nokta
const new_student_point = students.map((student) => {
  if (student.point < 50) {
    student.point += 15;
    return student;

    /* return {
      name: student.name,
      point: student.point + 15,
    }; */
  } else {
    return student;
  }
});

console.log(new_student_point);
