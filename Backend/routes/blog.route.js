let express=require("express")
const { addblog, getblogs, deleteblog, deleteblogs } = require("../controllers/blog.controller")
let blogRoute=new express.Router()
blogRoute.post("/addblog",addblog)
blogRoute.get("/getblogs",getblogs)
blogRoute.delete("/delblogs",deleteblogs)
blogRoute.delete("/del/:_id",deleteblog)
module.exports={blogRoute};