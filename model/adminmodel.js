var mongoose = require("mongoose")
var adminSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})
module.exports = mongoose.model("admin",adminSchema)