var mongoose = require("mongoose");
mongoose.connect("mongodb://marc:hola@ds041671.mongolab.com:41671/patatamarc", function() {
    console.log("Connectat a mongodb");
});

module.exports = mongoose;
