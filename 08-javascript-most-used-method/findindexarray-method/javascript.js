// * uzeyir-yariz {250720241813} * \\
// > {findindexarray-method}

const points = [70, 50, 45, 25, 45, 20, 78, 65, 41, 15];

const array_index = points.findIndex((point) =>{
    return point == 25;
});

console.log(points[array_index]);
console.log(points[array_index] * 2);

const students = [
  { name: "Paul", point: 20 },
  { name: "John", point: 70 },
  { name: "Mike", point: 80 },
  { name: "Alex", point: 90 },
];

const array_index_obj = students.findIndex((student) => {
    return student.name == "Mike";
});

students[array_index_obj].name = "Arthur";
students[array_index_obj].point += 30;
console.log(students)

// * uzeyir-yariz {250720241819} * \\