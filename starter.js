var express = require("express");
var app = express();
var port = 3000;


app.get("/", function(req, res) {
	res.send("yeet");
});

app.listen(port);
