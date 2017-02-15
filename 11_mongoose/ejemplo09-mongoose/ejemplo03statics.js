var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/db_libros");
//http://mongoosejs.com/docs/queries.html
// definicion del esquema
var Schema = mongoose.Schema;
var LibroSchema = new Schema({
    titulo: String,
    autor: String,
    sinopsis: String,
    fecha: Date,
    categoria: String,
    campos_biblioteca: {
        ejemplares: Number,
        reservas: Number,
        ultima_reserva: Date
    }
})

LibroSchema.statics.findByTitle = (title, cb) => {
    console.log("Buscando por titulo: " + title);
    return Libro.find({ titulo: new RegExp(title, "i") }, cb);
}
LibroSchema.methods.findBySimilar = (cb) => {
    console.log("Buscando por categoria: " + this.categoria);
    return Libro.find({ categoria: this.categoria }, cb);
}

var Libro = mongoose.model("Libro", LibroSchema);
Libro.findByTitle("lord", (error, data) => {
    if (error) {
        log.error("Error al procesar la busqueda");
    } else {
        console.log("Libros para la consulta find({titulo:/lord/i})")
        data.forEach((libro) => {
            console.log("Libro encontrado: " + libro.titulo);
        })
    }
});
/* A nivel de instancia
    init
    validate
    save
    remove

    A nivel de clase
    count
    find
    findOne
    findOneAndUpdate
    findOneAndDelete
    insertMany
    update
*/
Libro.findById("583d697c83d4e511c85e57cb", (error, libro) => {
    if (error) {
        console.error("Error!");
    } else {
        console.log("Libro con id :" + libro._id + "\n\t" + libro);

        libro.findBySimilar((error, data) => {
            console.log(data);
        });
    }
})