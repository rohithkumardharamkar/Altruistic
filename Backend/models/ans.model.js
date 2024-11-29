let mongoose=require("mongoose")
let ansSchm=mongoose.Schema({
    "_id":String,
    "ans":String
})
let ansmodel=mongoose.model("ansdb",ansSchm)
module.exports=ansmodel