const mongoose = require("mongoose");
const validator = require("validator");

const WellSchema = new mongoose.Schema({
    wellname : {
        type: String,
        required:true,
        minlength:3
    },

    price : {
        type: String,
        required:true,

    },
    unit : {
        type: String,
        required:true,

    },
    address : {
        type: String,
        required:true,
        minlength:3
    }
})

const Well = new mongoose.model('Well', WellSchema);

module.exports = Well;