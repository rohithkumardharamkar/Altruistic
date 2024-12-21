let mongoose=require("mongoose")
let qsch=mongoose.Schema({
    "qid":String,
    "title":String,
    "c1":String,
    "c2":String,
    "c3":String,
    "c4":String,
    "ans":String
})
let qmodel=mongoose.model("questions",qsch);
module.exports=qmodel;