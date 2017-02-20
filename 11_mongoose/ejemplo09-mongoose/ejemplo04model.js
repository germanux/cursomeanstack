var mongoose = require("mongoose");
// definicion del esquema
var Schema = mongoose.Schema;
var LibroSchema = new Schema({
    titulo: String,
    autor: String,
    campos_biblioteca: {
        ejemplares: Number,
        ultima_reserva: Date
    }
})
var ReservaSchema = new Schema({});
module.exports = {
    Libro: mongoose.model("Libro", LibroSchema),
    Reserva: mongoose.model("Libro", LibroSchema)
}