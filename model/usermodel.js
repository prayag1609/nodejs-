var mongoose = require("mongoose")
var userSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    passeord:{
        type:String
    }
})
module.exports = mongoose.model("user",userSchema)