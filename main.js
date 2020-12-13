const myName = "Saransh";

var helloWorld = () => {
  console.log("Hello world");
};

helloWorld();

var addModule = require("./addition");
addModule.addition();
console.log(addModule.justAVariable);

var subModule = require("./subtraction");
subModule.substraction();
console.log(subModule.justBVariable);
