const User = require("./src/User.js");
const Worker = require("./src/Worker.js");
const express = require("express");
const crypto = require("crypto");

const users = [];
const workers = [];

users.push(
    new User("0", "Bob", "bob@gmail.com")
);
users.push(
    new User("1", "Jack", "jochue@gmail.com")
);

workers.push(new Worker("0", "Vanya", "van@gmail.com", "Some_Company"));
workers.push(new Worker("0", "Petr", "peper@gmail.com", "Some_Company"));

const app = express();

app.get("/Users", function(req, res) {
    res.send(JSON.stringify(users));
});

app.get("/Workers", function(req, res) {
    res.send(JSON.stringify(workers));
});

app.get("/", function(req, res) {
    res.send(`
        <body>
            <h2>Homework_10</h2>
            <a href="http://localhost:3000/Users">Users</a>
            <br>
            <a href="http://localhost:3000/Workers">Workers</a>
        </body>
        `);
});

app.listen(3000, function() {
    console.log("Server listening on port 3000!");
});