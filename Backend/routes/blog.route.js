let express=require("express");
const { addblog, getblogs, deleteblog, deleteblogs, upload } = require("../controllers/blog.controller");
const { isadmin, islogin } = require("../controllers/user.controller");
let blogRoute=new express.Router();
blogRoute.post("/addblog",upload.single("bpic"),addblog);
blogRoute.get("/getblogs",getblogs);
blogRoute.delete("/delblogs",deleteblogs);
blogRoute.delete("/del/:_id",deleteblog);
module.exports={blogRoute};