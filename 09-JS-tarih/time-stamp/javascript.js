// * uzeyir-yariz {250720242310} * \\
// > {time-stamp}

const start_date = new Date("08/15/2024 9:50:00");
const now = new Date();

console.log(start_date);

const diff = start_date.getTime() - now.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
const years = Math.round(days / 365);

console.log(`dakika : ${mins}`);
console.log(`saat : ${hours}`);
console.log(`günler : ${days}`);
console.log(`years : ${years}`);

const time_stamp = 250720242310;
console.log(new Date(time_stamp))

// * uzeyir-yariz {260720240859} * \\
