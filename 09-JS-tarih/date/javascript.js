// * uzeyir-yariz {250720242250} * \\
// > {date}

const now = new Date();

console.log("tam çıktı : ",now);
console.log("tür : ",typeof now);

console.log("yıl          =", now.getFullYear());
console.log("ay           =", now.getMonth() + 1);
console.log("gün          =", now.getDate());
console.log("hafta        =", now.getDay());
console.log("saat         =", now.getHours());
console.log("dakika       =", now.getMinutes());
console.log("saniye       =", now.getSeconds());
console.log("timestamp    =", now.getTime());
console.log("tarih        =", now.toDateString());
console.log("string tarih =", now.toTimeString());
console.log("string local =", now.toLocaleDateString());

// * uzeyir-yariz {250720242309} * \\
