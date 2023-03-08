const http = require("http");
const fs = require("fs");
const port = 8080;

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   // fs.readFile()
//   res.write("Hi your Server is UP and Running!!");
//   res.end();
// });

// server.listen(port, (error) => {
//   if (error) {
//     console.log("there is some problem with server !!", error);
//   } else {
//     console.log("Server is up on port:", port);
//   }
// });
