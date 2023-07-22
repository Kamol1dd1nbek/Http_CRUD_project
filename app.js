const http = require("http");
const dotenv = require('dotenv').config();
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const createViewpath = (page) => path.resolve(__dirname, "views", `${page}.html`);
let filePath = "";
    res.setHeader("Content-type", "text/html");

    // if (req.url == "/") {
    //     fs.readFile("./index.html", (err, data) => {
    //         if (err) {
    //             console.log("Sahifani yuklashda xatolik!");
    //             res.statusCode = 404;
    //             res.end("Sahifani yuklashda xatolik!");
    //         } else {
    //             res.write(data);
    //             res.end();
    //         }
    //     })
    // } else if (req.url == "/users") {
    //     fs.readFile("./users.html", (err, data) => {
    //         if (err) {
    //             console.log("Sahifani yuklashda xatolik!");
    //             res.statusCode = 404;
    //             res.end("Sahifani yuklashda xatolik!");
    //         } else {
    //             res.write(data);
    //             res.end();
    //         }
    //     })
    // } else {
    //     fs.readFile("./error.html", (err, data) => {
    //         if (err) {
    //             console.log("Sahifani yuklashda xatolik!");
    //             res.statusCode = 404;
    //             res.end("Sahifani yuklashda xatolik!");
    //         } else {
    //             res.write(data);
    //             res.end();
    //         }
    //     });
    // }

    switch (req.url) {
        case "/":
            filePath = createViewpath("index");
            break;
        case "/users":
            filePath = createViewpath("users");
            break;
        default:
            filePath = createViewpath("error");
            res.statusCode = 404;
    }
    // fs.readFile(filePath, (err, data) => {  // first method
    //     if (err) {
    //         console.log(`Sahifani yuklashda xatolik!`);
    //         res.statusCode = 500;
    //     } else {
    //         res.write(data);
    //     }
    //     res.end();
    // });

    fs.access(filePath, fs.constants.R_OK, (err) => {  // secont method
        if (err) {
            res.statusCode = 500;
            res.end("Resource not found!")
        } else {
            fs.createReadStream(filePath).pipe(res);
        }
    });
    
});
const PORT = process.env.PORT || 3030;
const HOST = process.env.HOST || "localhost";
server.listen(PORT, HOST, (error) => {
    error ? console.log(error) : console.log(`Server is running on port: ${PORT}`);
});