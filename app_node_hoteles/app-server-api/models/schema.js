var moongose = require("mongoose");

moongose.connect("localhost:27017/db_hotels");

var Schema = moongose.Schema;

var CustomerSchema = new Schema({
    "name": String,
    "email": String
});

class Customer {
    constructor(nom, em) {
        this.name = nom;
        this.email = em;
    }
}


module.exports = {
    CustomerModel: moongose.model("Customer", CustomerSchema),
    Customer: Customer
}