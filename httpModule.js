var http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, { "content-type": "text/html" });
    response.write("<h1>This is the heading...</h1>");
    response.end();
  })
  .listen(3000, () => {
    console.log("Server is running...");
  });
