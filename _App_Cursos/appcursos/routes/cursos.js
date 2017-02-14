var express = require('express');
var modelo = require('../bin/modelo/modelo');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    modelo.acceder("leerCursos", (datos) => {
        res.send(datos);
    });
});

module.exports = router;