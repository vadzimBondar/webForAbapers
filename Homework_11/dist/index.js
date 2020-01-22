"use strict";

var User = require("./src/User.js");
var Worker = require("./src/Worker.js");
var express = require("express");
var crypto = require("crypto");

var users = [];
var workers = [];

users.push(new User("0", "Bob", "bob@gmail.com"));
users.push(new User("1", "Jack", "jochue@gmail.com"));

workers.push(new Worker("0", "Vanya", "van@gmail.com", "Some_Company"));
workers.push(new Worker("0", "Petr", "peper@gmail.com", "Some_Company"));

var app = express();

app.get("/Users", function (req, res) {
    res.send(JSON.stringify(users));
});

app.get("/Workers", function (req, res) {
    res.send(JSON.stringify(workers));
});

app.get("/", function (req, res) {
    res.send("\n        <body>\n            <h2>Homework_10</h2>\n            <a href=\"http://localhost:3000/Users\">Users</a>\n            <br>\n            <a href=\"http://localhost:3000/Workers\">Workers</a>\n        </body>\n        ");
});

app.listen(3000, function () {
    console.log("Server listening on port 3000!");
});
//# sourceMappingURL=index.js.map
