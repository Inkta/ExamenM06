var db = require("../db");
var Model = db.model('Model', {
    isbn: {
        type: String,
        required: true,
        unique: true,
    },
    titol: {
        type: String,
        required: true
    },
    autors: {
        type: [String],
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now   
    }
});

module.exports = Model;