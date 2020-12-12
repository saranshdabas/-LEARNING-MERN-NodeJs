class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
}

var newUser = new User("Saransh", "abc@xyz.com");

console.log(newUser.getName());
console.log(newUser.getEmail());
