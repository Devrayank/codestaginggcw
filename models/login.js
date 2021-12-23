const mongoose = require("mongoose");
const validator = require("validator");

const LoginSchema = new mongoose.Schema({
 
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
        type:String,
        required:true,
    }
   
})

const Userlogin = new mongoose.model('User', LoginSchema);

module.exports = Userlogin;