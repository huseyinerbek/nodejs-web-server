var express = require("express");
var middleware = require("./middleware");
var app = express();

app.use(middleware.logger);

app.get("/hakkimda", middleware.requireAuthentication, function (res, res) {
  res.send("hakkımda Sayfası");
});

app.use(express.static(__dirname + "/public"));

app.listen(3001);
