const fs = require("fs");

//readFile takes 3 args, location of file, format of file and a callback fn
fs.readFile(__dirname + "/hello.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//Might as well display in the browser
const http = require("http");

http
  .createServer((req, res) => {
    fs.readFile(__dirname + "/hello.txt", "utf8", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "content-type": "text/plain" });
      res.write(data);
      res.end();
    });
  })
  .listen(3000);
