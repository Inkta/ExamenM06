var express = require("express");
var bodyParser = require("body-parser");
var Model = require("./models/model");

var app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

//app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});


app.get("/api/examen", function(req, res, next) {
    Model.find(function(err, resultat) {
        if (err) {
            return next(err);
        }
        res.json(resultat);
    });

});

app.get("/api/examen/:seccio", function(req, res, next) {
    console.log("hola");
    Model.find({
        seccio: req.param('seccio')
    }, function(err, resultat) {
        if (err) {
            return next(err);
        }
        res.json(resultat);
    });
});

app.put("/api/examen/:id", function(req, res, next) {
    Model.update({
        "codi": req.params.id
    }, {
        "nom": req.body.nom,
        "seccio": req.body.seccio,
        "preu": req.body.preu
    }, function(err, resultat) {
        if (err) {
            return next(err);
        }
        res.status(200).json(resultat);
    });
});


app.delete("/api/examen/:id", function(req, res, next) {
    Model.remove({
        "codi": req.params.id
    }, function(err, llibre) {
        if (err) {
            return next(err)
        }
        res.status(200).json();
    });
});

app.post("/api/examen", function(req, res, next) {
    var producte = new Model({
        "codi": req.body.codi,
        "nom": req.body.nom,
        "seccio": req.body.seccio,
        "preu": req.body.preu
    });
    console.log(producte);
    producte.save(function(err, resultat) {
        if (err) {
            return next(err)
        }
        res.status(201).json(resultat);
    });
});

app.listen(process.env.PORT, function() {
    console.log('Server listening on', process.env.PORT);
});