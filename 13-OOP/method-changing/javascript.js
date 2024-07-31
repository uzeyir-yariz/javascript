// * uzeyir-yariz {310720240933} * \\
// > {method-changing}

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  login() {
    console.log(`${this.username} giriş yaptı`);
    return this;
  }
  // zincirleme olarak çalıştırmak istediğimde return this komutunu kullanabilirim
  logout() {
    console.log(`${this.username} çıkış yaptı`);
    return this;
  }
}

const user_1 = new User("Üzeyir", "uzeyiryariz13@gmail.com");
const user_2 = new User("Arthur", "art@gmail.com");
// console.log(user_1, user_2);
console.log(user_1.login(), user_2.logout());

user_1.login().logout().login(); // bunu gibi komutlarda class fonksiyonlara sonunda return this komutu eklmeme gerekiyor 

// * uzeyir-yariz {310720240950} * \\
