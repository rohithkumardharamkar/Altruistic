let express=require("express");
const { adddrive, getDrives, deleteAlldrives } = require("../controllers/drive.controller");
let driveRoute=new express.Router();
driveRoute.post("/adddrive",adddrive);
driveRoute.get("/getdrive",getDrives)
driveRoute.delete("/clearDrives",deleteAlldrives)
module.exports=driveRoute