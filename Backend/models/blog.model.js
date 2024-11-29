let mongoose=require("mongoose")
let blogSchmema=mongoose.Schema(
    {
        "title":String,
        "descp":String,
        "bpic":String,
        "name":String
    }
)
let blogModel=mongoose.model("blogs",blogSchmema)
module.exports=blogModel;