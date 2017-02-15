var mongoose = require("mongoose");
mongoose.connect("localhost:27017/db_libros")
var Libro = require("./ejemplo05model")
miLibroDeHistoria = new Libro({
    titulo: "Mi libro de historia",
    campos_biblioteca: {
        reservas: 1
    },
    categoria: "terror"
});
miLibroDeHistoria.save((error) => {
    if (error) {

        console.error("Pues no se ha guardado! ");
        lista_campos = ["titulo", "campos_biblioteca.reservas", "categoria"];
        lista_campos.forEach((campo) => {
            if (error.errors[campo]) {
                console.error(error.errors[campo].message);
            }
        })
    } else {
        console.log("Guardado con id: " +
            miLibroDeHistoria._id);
    }
})