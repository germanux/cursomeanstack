var express = require('express');
var router = express.Router();
var model = require("../../models/customer.model");
//var Customer = require

/* GET users listing. */
router.get('/name/:name', function(req, res, next) {
    let name = req.params.name;

    if (name == null) {
        res.statusCode = 404;
        res.send("No encontrado!");
    } else {

        var fnCallback = function(error, customers) {
            if (error) {
                console.error("No se ha leido de la bbdd");
            } else {
                res.json(customers);
            }
        }

        model.leer({ "name": name }, fnCallback);


    }
});

// Post metodo

router.post("/", function(req, res) {
    /*let JSONCustomer = req.body;
    let customer = JSON.parse(JSONCustomer);*/
    /*let customer = {
        "name": req.body.name,
        "email": req.body.email
    };
    console.log(req.body.name);*/
    customer = req.body;

    var fnCallback = function(error, customer) {
        if (error) {
            console.error("No se ha leido de la bbdd");
        } else {
            res.json(customer);
        }
    };

    model.grabar(customer, fnCallback);
});

module.exports = router;