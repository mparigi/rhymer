var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use("/public", express.static(__dirname + '/'));

app.get("/", function(req, res) {
	res.sendFile('index.html', { root: __dirname });
});

app.listen(port);
