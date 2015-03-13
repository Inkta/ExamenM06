var express = require("express");
var bodyParser = require("body-parser");
var Model = require("./models/model");

var app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs');

app.get('/', function(req, res) {
  res.render('index')
});


app.get("/api/examen", function(req, res, next) {
    Model.find(function(err, resultat) {
        if (err) {
            return next(err);
        }
        res.json(resultat);
    });
    
});

app.get("/api/examen/:id", function(req, res, next) {
    Model.find({isbn:req.param('id')},function(err, resultat) {
        if (err) {
            return next(err);
        }

        res.json(resultat);
    });
});

app.put("/api/examen/:id", function(req, res, next) {
    //Model.update({"isbn":req.params.id},{"titol":req.body.titol,"autors":req.body.autors},function(err, llibre) {
        if (err) { return next(err) }
        res.status(200).json(resultat);
    }); 
});


app.delete("/api/examen/:id", function(req, res, next) {
        //Llibre.remove({"isbn":req.params.id},function(err, llibre) {
        if (err) { return next(err) }
        res.status(200).json(resultat);
    });
});

app.post("/api/examen", function (req,res,next) {
    /*var llibre = new Llibre({
        "isbn" : req.body.isbn,
        "titol": req.body.titol,
        "autors": req.body.autors
    });*///Model nou per introduïr forma
    model.save(function(err, resultat) {
        if (err) { return next(err) }
        res.status(201).json(resultat);
    });
});

app.listen(process.env.PORT, function() {
    console.log('Server listening on', process.env.PORT);
});