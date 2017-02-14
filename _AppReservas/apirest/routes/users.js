var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Responder con un recurso de usuarios');
});

module.exports = router;