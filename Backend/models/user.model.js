let mongoose=require("mongoose");
let userSchema=mongoose.Schema({
    "_id":Number,
    'name':String,
    'age':Number,
    'email':String,
    'photo':String,
    'add':String,
    'mobile':Number,
    'group':String,
    "gender":String,
    "pwd":String,
    "dob":String,
    "role":String,
    "bscore":Number,
    "scores":[],
    "ans":[] ,
   
})
let userModel=mongoose.model("users",userSchema);
module.exports=userModel