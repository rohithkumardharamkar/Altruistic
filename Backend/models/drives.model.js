let mongoose=require("mongoose")
let driveSch=mongoose.Schema({
    "date":String,
    "place":String,
    "_id":String,
    "name":String
})
let drivemodel=mongoose.model("drives",driveSch)
module.exports=drivemodel