var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SchemaRoom = new Schema({
    _id: {
        type: Number,
        required: [true, '{PATH} es obligatorio'],
        min: [100, 'Las habitaciones empiezan en {MIN}'],
        max: [999, 'Las habitaciones acaban en {MAX}']
    },
    isDouble: {
        type: Boolean,
        required: [true, '{PATH} es obligatorio']
    }
});


var SchemaCustomer = new Schema({
    //_id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: [true, '{PATH} es obligatorio'],
        minlength: [2, 'El nombre debe tener mínimo {MINLENGTH} caracteres'],
        maxlength: [50, 'El nombre debe tener máximo {MAXLENGTH} caracteres']
    },
    email: {
        type: String,
        required: [true, '{PATH} es obligatorio'],
        validate: {
            validator: (email) => {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
            }
        }
    }
});


var SchemaBooking = new Schema({
    customer_id: {
        type: Schema.Types.ObjectId,
        required: [true, '{PATH} es obligatorio']
    },
    room_id: {
        type: Number,
        required: [true, '{PATH} es obligatorio'],
        min: [100, 'Las habitaciones empiezan en {MIN}'],
        max: [999, 'Las habitaciones acaban en {MAX}']
    },
    check_date: {
        type: Date,
        required: [true, '{PATH} es obligatorio'],
        validate: {
            validator: (fecha) => {
                return fecha.getTime() >= (Date.now() - 24 * 60 * 60 * 1000) //Si le quito un dia puede reservar para hoy
            }
        }
    },
    isDouble: {
        type: Boolean,
        required: [true, '{PATH} es obligatorio']
    }
});

module.exports = {
    Room: mongoose.model("Room", SchemaRoom),
    Customer: mongoose.model("Customer", SchemaCustomer),
    Booking: mongoose.model("Booking", SchemaBooking)
}