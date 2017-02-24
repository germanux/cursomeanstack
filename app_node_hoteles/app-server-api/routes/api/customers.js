var express = require('express');
var router = express.Router();
var model = require("../../models/customer.model");

// router.use(require("body-parser").json());

/* GET users listing. */
router.get('/name/:name', function(req, res, next) {
    let name = req.params.name;
    if (name == null) {
        res.statusCode = 404;
        res.send("No encontrado!");
    } else {
        var fnCallback = function(error, customer) {
            if (error) {
                console.log("No se ha leido de la bbdd");
            } else {
                res.json(customer);
            }
        }
        model.leer({ name: name }, fnCallback);
    }
});
/* POST metodo */
router.post("/", function(req, res) {
    let customer = req.body;

    console.log(req.body.name);

    model.grabar(customer, (error, customer) => {
        if (error) {
            console.log("No se ha leido de la bbdd");
        } else {
            res.json(customer);
        }
    });
})

module.exports = router;