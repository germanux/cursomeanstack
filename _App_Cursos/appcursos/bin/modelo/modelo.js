// Variables para la conexión con MongoDB.
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// URL de conexión con la BD
var url = 'mongodb://localhost:27017/bd_mongo_cursos';

var modelo = {
        acceder: function(accion, miFuckingCallback) {
            // Conectar e insertar
            MongoClient.connect(url, function(err, db) {
                assert.equal(null, err);
                console.log("Conexión con el servidor realizada correctamente");
                // Para probar la inserción de datos vamos a crear una nueva conexión, en la cual se invocará la función qe toque del objeto cursos.

                modelo.cursos[accion](db, function(res) {

                    console.log("Cerrando base de datos");
                    db.close();
                    if (typeof miFuckingCallback == "function")
                        miFuckingCallback(res);
                })
            });
        },
        cursos: {
            /* La llamada al método insertarVarios ejecuta la inserción de datos en la colección y toma 2 parámetros de entrada. El primer parámetro son los datos a guardar en formato JSON. El segundo parámetro es la postfunción a ejecutar tras la inserción, la cual también toma 2 parámetros de entrada, los cuales explicaremos más adelante. */
            insertarVarios: function(db, callback) {
                // Carga de la colección de cursos.
                var collection = db.collection('cursos');

                /* Inserción de algunos cursos. En este bloque se define los documentos a guardar en la colección. En este caso se envían 5 cursos, cada una de ellas con su título y maestro. */
                collection.insert([
                    { titulo: 'MEAN Full Stack Developer', maestro: 'Germán Caballero' },
                    { titulo: 'Desarollo con Apache Cordova', maestro: 'Alfonso El Sabio' },
                    { titulo: 'Curso de patrones de diseño', maestro: 'Sergio el programador' },
                    { titulo: 'Curso de desarrollo web', maestro: 'Daniel Algo Más' },
                    { titulo: 'Curso de programación aleatoria', maestro: 'Francisco el Vietmanita Gaditano' }
                ], function(err, docs) {
                    /*Este último bloque del insert es la postfunción que se ejecuta tras la inserción. El primero parámetro de entrada de la función es la variable err, que contiene los datos del error, en caso de que se produzca alguno. El segundo parámetro es el resultado de la operación, el cual se utiliza para hacer varias comprobaciones mediante tests unitarios. */

                    // Tests unitarios
                    /*Dentro del cuerpo de la función se ejecutan 3 tests unitarios, el primero para comprobar que no hay errores, el segundo para comprobar que el resultado tiene 5 documentos y el tercero para comprobar que se han insertado 3 documentos.*/
                    assert.equal(err, null);
                    assert.equal(5, docs.result.n);
                    assert.equal(5, docs.ops.length);

                    // Log de consola: Por último se escribe por el log de consola el mensaje...
                    console.log("Insertados cursos en las colección de cursos.");
                    // Y se ejecuta la función callback pasándole el resultado de la operación como parámetro.
                    callback(docs);
                });
            },
            leerCursos: function(db, callback) {
                // Carga de la colección de cursos.
                var collection = db.collection('cursos');

                // Consulta de los documentos (cursos) de la colección                
                /* Este método hace la búsqueda en la colección con los parámetros de búsqueda dados dentro de las llaves. En este caso no hay parámetros por lo que se trae todos los elementos de la colección. */
                var arrayCursos = collection.find({}).toArray(function(err, res) {
                    /*  Se invoca el método toArray para formatear el resultado y poder pasarle la función encargada de hacer los tests unitarios y sacar por pantalla los resultados. */
                    assert.equal(err, null);
                    assert.notEqual(0, res.length);
                    console.log("Se han encontrado los siguientes cursos");
                    console.dir(res)
                    callback(res);
                });
                return arrayCursos;
            }
        }
    }
    // LLamamos a la función de inicializar
modelo.acceder("insertarVarios");
module.exports = modelo;