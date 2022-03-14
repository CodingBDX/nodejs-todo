var express = require("express");
var todoController = require("./controllers/todoController");
var app = express();
app.set("view engine", "ejs");

// statics files
app.use(express.static("./public"));

// first controller
todoController(app);

// listen port 3000
app.listen(3000);
console.log("you are logged on 3000");
