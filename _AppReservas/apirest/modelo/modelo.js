var ClienteMongo = require("mongodb").MongoClient;
var assert = require("assert");

var url = "mongodb://localhost:27017/bd_hoteles";

var modelo = {
    // Accion es insertarBase/leerReservas como cadena
    acceder: function(accion, datos, miCallback) {
        ClienteMongo.connect(url, function(err, db) {
            assert.equal(null, err);
            console.log("Conexión a bbdd correcta");

            modelo.reservas[accion](db, datos, function(resultado) {
                console.log("Cerrar bb.d..");
                db.close();
                if (typeof miCallback == "function") {
                    miCallback(resultado);
                }
            })
        })
    },
    reservas: {
        insertarBase: function(db, datosReservas, callback) {
            var coleccion = db.collection("reservas");

            coleccion.insert(datosReservas,
                function(err, documentos) {
                    assert.equal(err, null);
                    assert.equal(3, documentos.result.n);
                    assert.equal(3, documentos.ops.length);

                    console.log("Insertadas reservas");
                    callback(documentos);
                });
        },
        leerReservas: function(db, callback) {

        }
    }
}
modelo.acceder("insertarBase", [
        { cliente: "Pepito", habitacion: 1 },
        { cliente: "Otrocliente", habitacion: 1 },
        { cliente: "Manuel atiende", habitacion: 1 }
    ],
    (resultado) => {
        console.log("Datos insertasd");
    });
module.exports = modelo;