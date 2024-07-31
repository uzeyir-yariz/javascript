// * uzeyir-yariz {310720240921} * \\
// > {class}

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  login() {
    return `${this.username} giriş yaptı`;
  }

  logout() {
    return `${this.username} çıkış yaptı`;
  }
}

const user_1 = new User("Üzeyir", "uzeyiryariz13@gmail.com");
const user_2 = new User("Arthur", "art@gmail.com");
// console.log(user_1, user_2);
console.log(user_1.login(), user_2.logout());

// * uzeyir-yariz {310720240933} * \\
