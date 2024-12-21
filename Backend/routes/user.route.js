let express=require("express");
const { reg, login, getBlood, getCity, getAll, delMyAct, upload, contact, abc, abcd, isadmin, islogin, getchatgpt } = require("../controllers/user.controller");
let userRoute=new express.Router();
userRoute.post("/reg",upload.single("photo"),reg);
userRoute.post("/login",login);
userRoute.get("/group/:group",getBlood);
userRoute.get("/city/:add",getCity);
userRoute.get("/all",getAll);
userRoute.delete("/delact/:_id",delMyAct);
userRoute.get("/send",contact);
userRoute.get("/filter",abc);
userRoute.get("/fg",abcd);
userRoute.post("/getresult",getchatgpt)

module.exports=userRoute;