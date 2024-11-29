const blogModel = require("../models/blog.model");

let addblog=async(req,res)=>
{
    try
    {
        let d=await blogModel({...req.body})
         await d.save();
         res.json({"msg":"Blog Added"})
    }
    catch(err)
    {
        console.log(err);
    }
}
let getblogs=async(req,res)=>
{
    try{
        let d=await blogModel.find({})
        res.json(d)
    }
    catch(err)
    {
        console.log(err);
        
    }
}
let deleteblogs=async(req,res)=>
{
    try
    {
        await blogModel.deleteMany({})
        res.json({"msg":"Blogs Deleted"})

    }
    catch(err)
    {
        console.length(err)
    }
}
let deleteblog=async(req,res)=>
    {
        try
        {
            await blogModel.findByIdAndDelete({"_id":req.params._id})
            res.json({"msg":"Blogs Deleted"})
    
        }
        catch(err)
        {
            console.length(err)
        }
    }
module.exports={addblog,getblogs,deleteblogs,deleteblog}