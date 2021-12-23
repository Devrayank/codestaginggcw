const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        required:true,
        minlength:3
    },
    email: {
        type:String,
        required:true,
        unique: [true, "Email id already register"],
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("Invalid Email")
            }
        }
    },
    password: {
        type:Number,
        required:true,
        min:6
    },
    phone: {
        type:Number,
        required:true,
        min:10,
        unique:true
    },
    address : {
        type: String,
        required:true,
        minlength:3
    }
})

const User = new mongoose.model('User', UserSchema);

module.exports = User;