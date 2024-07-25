// * uzeyir-yariz {250720241841} * \\
// > {reverse-and-sort-method}

const ayrac = "----------------------------------------";

const names = ["Paul", "Azura", "Jack", "Arthur", "Kaylee", "Alli", "Yuri"];

names.sort();
console.log("sıralanmış hali :", names);
names.reverse();
console.log("ters hali :", names);

console.log(ayrac);

const points = [3, 70, 50, 45, 25, 45, 20, 78, 65, 41, 15];

points.sort((a, b) => a -b); // büyükten küçüğe yapmak istiyorsan a ve b'nin yerini değiştir
console.log(points);

console.log(ayrac);

const students = [
  { name: "Paul", point: 20 },
  { name: "John", point: 70 },
  { name: "Mike", point: 80 },
  { name: "Alex", point: 90 },
  { name: "Mike", point: 40 },
];

students.sort((a, b) => b.point -a.point);

/* students.sort((a, b) => {
  if (a.point > b.point) {
    return -1;
  } else if (a.point < b.point) {
    return 1;
  } else {
    return 0;
  }
}); */

console.log(students);

// * uzeyir-yariz {250720241857} * \\
