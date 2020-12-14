//By default methods are async i.e they do not follow top down code flow
//Whoever method finishes first, it's callback fn is executed, doesn't wait for others to finish
//Sync Function follows the path and executed first then rest of the code below it
//To use sync fn since we do not have callback fn to give us err, we use try catch

const fs = require("fs");

try {
  const data = fs.readFileSync(__dirname + "/hello.txt", "utf8");
  console.log(data);
} catch (e) {
  console.log(e);
}

console.log("after Printing...");
