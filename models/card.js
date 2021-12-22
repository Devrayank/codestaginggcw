const mongoose = require("mongoose");
const validator = require("validator");

const CartSchema = new mongoose.Schema({
       userid : {
        type: String,
        required:true

    },
    productid : {
        type: String,
        required:true

    },
    price : {
        type: String,
        required:true

    }
  
})

const Cart = new mongoose.model('Cart', CartSchema);

module.exports = Cart;