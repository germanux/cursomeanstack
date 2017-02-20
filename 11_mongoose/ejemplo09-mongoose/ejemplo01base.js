// carga del modulo
var mongoose = require("mongoose");
// conectar a la base de datos
mongoose.connect("mongodb://localhost/db_libros");
// Genero el modelo
var Libro = mongoose.model("Libro", {
    titulo: String,
    autor: String,
    paginas: Number
}, "libreria");
var Camiones = mongoose.model("Camiones", {
    titulo: String,
    autor: String,
    paginas: Number
}, "");
var Arbol = mongoose.model("Arbol", {
    titulo: String,
    autor: String,
    paginas: Number
});
// http://mongoosejs.com/docs/schematypes.html

var esdla = new Libro({
    titulo: "El señor de los arillos",
    autor: "JJ T 4",
    paginas: 1999
});
(new Arbol({
    titulo: "Arbol",
    autor: "JJ T 4",
    paginas: 1999
})).save();
esdla.save((error) => {
    if (error) {
        console.error("Error al guardar: ", error)
    } else {
        console.log("Pelicula guardada " + esdla._id)
    }
});