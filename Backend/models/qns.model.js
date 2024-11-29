let mongoose=require("mongoose")
let qnsSch=mongoose.Schema({
    "_id":String,
    "title":String,
    "c1":String,
    "c2":String,
    "c3":String,
    "c4":String
})
let qnsModel=mongoose.model("qnsdb",qnsSch)
module.exports=qnsModel