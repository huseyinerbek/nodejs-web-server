var express = require("express");
var app = express();

var middleware = {
  requireAuthentication: function (req, res, next) {
    console.log("Özel root girildi");
    next();
  },
  logger: function(req,res,next){
    console.log(`${req.method} ${req.originalUrl}`);
    next();
  }
};

app.use(middleware.logger);

app.get("/hakkimda", middleware.requireAuthentication, function (res, res) {
  res.send("hakkımda Sayfası");
});

app.use(express.static(__dirname + "/public"));

app.listen(3001);
