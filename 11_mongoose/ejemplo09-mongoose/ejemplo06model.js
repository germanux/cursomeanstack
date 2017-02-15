var mongoose = require("mongoose");
// definicion del esquema
var Schema = mongoose.Schema;
var LibroSchema = new Schema({
    titulo:     {
        type:       String,
        required:   [true,"requerido macho!"],
        validate: {
            validator: (valor)=>{
                return /^[A-Z]/.test(valor);
            },
            message: "No empieza por mayusculas!"
        }
      
    },
    autor:      String,
    sinopsis:   String,
    fecha:      {
        type: Date,
        required: true,
        index: true
    },
    categoria:  {
        type: String,
        enum: ["aventuras","terror","novela"],
        required: true
    },
    campos_biblioteca:{
        ejemplares: Number,  
        reservas:   {
            type: Number,
            min: [1,'Al menos una reserva, no? tu valor {VALUE} no sirve']
        },
        ultima_reserva: Date
    }
})
LibroSchema.index({fecha:1,"campos_biblioteca.reservas":-1});
module.exports = mongoose.model("Libro",LibroSchema);