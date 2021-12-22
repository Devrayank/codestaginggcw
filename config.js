const mongoose = require("mongooes");

mongoose.connect("mongodb://localhost:27017/Gcwapp", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopologt:true
}).then(() => {
console.log("Connection success");
}).catch((e) =>{
    console.log("No connection");
});
