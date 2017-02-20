var mongoose = require("mongoose");
mongoose.connect("localhost:27017/db_libros")
var Libro = require("./ejemplo04model")

function getLibros(limit, skip) {
    //return Libro.find() // Paginad!
    var array = [];

    Libro.find().limit(limit).exec((libro) => {
        array.push(libro);
    });
    return;
}

function getLibroById(_id) {
    Libro.findById(_id, (error, libro) => {
        //TODO:
        console.log(libro.titulo);
    })
}

function saveLibro(libro) {
    new Libro({ clave: "valor" });
    libro.save((error) => {
        //TODO: 
    })
}

function updateLibro(libro) {
    //TODO
    getLibroById(libro._id)
    libro.categoria = "terror";
    saveLibro(libro);
}

function deleteLibro(_id) {
    Libro.findByIdAndRemove(_id, () => {

    })
}

deleteLibro("1")