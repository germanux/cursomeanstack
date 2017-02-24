var mongoose = require("mongoose");
var Schemas = require("./schema");

function grabar(customer, callback) {

    let customerModel = new Schemas.CustomerModel(customer);

    customerModel.save((error, customer) => {
        if (error) {
            console.error("Error al guardar");
        } else {
            console.log("Cliente guardado");
        }
        if (typeof callback != "undefined") {
            callback(error, customer);
        }
    })
}

function leer(customer, callback) {
    let name = customer.name;

    Schemas.CustomerModel.find({ "name": name }, { "__v": 0 },
        (error, customers) => {
            if (typeof callback != "undefined") {
                callback(error, customers);
            }
        });
}

module.exports.grabar = grabar;
module.exports.leer = leer;