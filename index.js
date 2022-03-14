var express = require("express");
var todoController = require("./controllers/todoController");
var app = express();
app.set("view engine", "ejs");

const port = process.env.PORT || 3000;
// statics files
app.use(express.static("./public"));

// first controller
todoController(app);

// listen port 3000
app.listen(port);
console.log("you are logged on 3000");
