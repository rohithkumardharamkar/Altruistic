let express=require("express");
const { adddrive, getDrives, deleteAlldrives, deldrive } = require("../controllers/drive.controller");
const { islogin } = require("../controllers/user.controller");
let driveRoute=new express.Router();
driveRoute.post("/adddrive", adddrive);
driveRoute.get("/getdrive",getDrives);
driveRoute.delete("/clearDrives",deleteAlldrives);
driveRoute.delete("/deldrive/:_id",deldrive);
module.exports=driveRoute;