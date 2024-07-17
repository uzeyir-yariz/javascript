const not = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

for (let i = 0; i < not.length; i++) {
  if (not[i] < 50) {
    console.log(`${i} : Not Passed`);
    break;
  } else {
    console.log(`${i} : Passed`);
  }
}
