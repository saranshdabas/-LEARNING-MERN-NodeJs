function student() {
  this.name = "saransh";
  this.age = 24;
}

student.prototype = {
  address: "Find me, I m so lost!",
  getName() {
    return this.name;
  },
};

var stud = new student();

console.log(stud.address);
console.log(stud.getName());
