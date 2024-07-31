// * uzeyir-yariz {310720241011} * \\
// > {super}

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  login() {
    console.log(`${this.username} giriş yaptı`);
    return this;
  }

  logout() {
    console.log(`${this.username} çıkış yaptı`);
    return this;
  }
}

class Admin extends User { // User'den üretilmiş Admin. sub class
  constructor(username, email, title) {
    super(username, email); // atama yapmazsam buraya yazabilirim
    this.title = title;
  }

  delete_user(user) {
    users = users.filter((us) => us !== user); // filtrelenmiş hali
  }
}

const user_1 = new User("Üzeyir", "uzeyiryariz13@gmail.com");
const user_2 = new User("Arthur", "art@gmail.com");

// admin olan
const user_3 = new Admin("Azura", "Azu@gmail.com", "main_admin"); // admine özel parametre

let users = [user_1, user_2, user_3];

user_3.delete_user(user_1); // silme işlemi

console.log(user_3);

// * uzeyir-yariz {310720241016} * \\
