const http = require("http");
const dotenv = require('dotenv').config();
// console.log(Object.keys(http));


const server = http.createServer((req, res) => {
    console.log("serverga so'rov");
    console.log(`Url: ${req.url},  Method: ${req.method}`);
    res.setHeader("Content-type", "text/html");
    res.write("<h1>Serverdan javob</h1>");
    res.end();
});

const PORT = process.env.PORT || 3030;
const HOST = process.env.HOST || "localhost";
console.log(HOST);
server.listen(PORT, HOST, (error) => {
    error ? console.log(error) : console.log(`Server is running on port: ${PORT}`);
});