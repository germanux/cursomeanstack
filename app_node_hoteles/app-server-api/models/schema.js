var mongoose = require("mongoose");

mongoose.connect("localhost:27017/db_hotels");

var Schema = mongoose.Schema;

class Customer {

    constructor(nom, em) {
        this.name = nom;
        this.email = em;
    }
}

var CustomerSchema = new Schema({
    name: String,
    email: String
});

module.exports = {
    CustomerModel: mongoose.model("Customer", CustomerSchema),
    Customer: Customer
}