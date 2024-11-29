let express=require("express");
const { reg, login, getBlood, getCity, getAll, delMyAct } = require("../controllers/user.controller");
let userRoute=new express.Router();
userRoute.post("/reg",reg);
userRoute.post("/login",login);
userRoute.get("/group/:group",getBlood);
userRoute.get("/city/:add",getCity);
userRoute.get("/all",getAll)
userRoute.delete("/delact/:_id",delMyAct)
module.exports=userRoute;