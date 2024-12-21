let mongoose=require("mongoose")
let ansSch=new mongoose.model({
    "_id":String,
    "ans":String
})
let ansModel=mongoose.model("answers",ansSch);
module.exports=ansModel