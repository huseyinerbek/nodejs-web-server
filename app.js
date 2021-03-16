var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/nodeMongoTest", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var db = mongoose.connection;

var User = require("./user");

db.once("open", function () {
  console.log("Baglantı Saglandı");
});
