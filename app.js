const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

var items = [];
app.get("/", function (req, res) {

    res.render("list", { elem: items })
});

app.post("/", (req, res) => {
    var item = req.body.elem1;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server Started");
});