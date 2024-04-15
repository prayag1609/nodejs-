var mongoose = require("mongoose")
var resultschema = mongoose.Schema({
    name:{
        type:String
    },
    sub1:{
        type:String
    },
    sub2:{
        type:String
    },
    sub3:{
        type:String
    },
    sub4:{
        type:String
    },
    sub5:{
        type:String
    },
    total:{
        type:String
    },
    percentage:{
        type:String
    },
    grade:{
        type:String
    },

})
module.exports = mongoose.model("result",resultschema)