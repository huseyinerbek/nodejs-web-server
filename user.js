var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    ad: String,
    soyad: String,
    dogumTarihi: String,
    email: String
});

var User = mongoose.model("User",userSchema);
module.exports = User;