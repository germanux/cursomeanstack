// Variables para la conexión con MongoDB.
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// URL de conexión con la BD
var url = 'mongodb://localhost:27017/bd_mongo_cursos';

// Prueba de conexión con el servidor
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Conexión con el servidor realizada correctamente");

    db.close();
});