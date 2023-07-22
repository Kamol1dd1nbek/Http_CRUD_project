const http = require("http");
const dotenv = require('dotenv').config();
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html");
    if (req.url == "/") {
        fs.readFile("./index.html", (err, data) => {
            if (err) {
                console.log("Sahifani yuklashda xatolik!");
                res.statusCode = 404;
                res.end("Sahifani yuklashda xatolik!");
            } else {
                res.write(data);
                res.end();
            }
        })
    } else if (req.url == "/users") {
        fs.readFile("./users.html", (err, data) => {
            if (err) {
                console.log("Sahifani yuklashda xatolik!");
                res.statusCode = 404;
                res.end("Sahifani yuklashda xatolik!");
            } else {
                res.write(data);
                res.end();
            }
        })
    } else {
        fs.readFile("./error.html", (err, data) => {
            if (err) {
                console.log("Sahifani yuklashda xatolik!");
                res.statusCode = 404;
                res.end("Sahifani yuklashda xatolik!");
            } else {
                res.write(data);
                res.end();
            }
        });
    }
});
const PORT = process.env.PORT || 3030;
const HOST = process.env.HOST || "localhost";
console.log(HOST);
server.listen(PORT, HOST, (error) => {
    error ? console.log(error) : console.log(`Server is running on port: ${PORT}`);
});