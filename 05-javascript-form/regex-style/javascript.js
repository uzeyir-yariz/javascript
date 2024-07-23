const username = "abcdef";
const pattern = /^[a-z]{6,10}$/;

let result = pattern.test(username);
console.log(result);

if (result) {
  console.log("Username is valid");
} else {
  console.log("Username is invalid");
}

let result2 = username.search(pattern);
console.log(result);
