//Global objects are accessible everywhere

//__dirname -> Gives the directory of the current file
console.log(__dirname);

//__filename -> Gives the directory followed by file name
console.log(__filename);

//require -> imports the file but not variables
var main = require("./main");

//Printing the exported data
console.log(main.myName);
