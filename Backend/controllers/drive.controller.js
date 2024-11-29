let drivemodel = require("../models/drives.model");

let adddrive=async(req,res)=>
{
    try
    {
        let d=await  drivemodel({...req.body})
        await d.save();
        res.json({"msg":"Drive Added"})
    }
    catch(err)
    {
        console.log(err);   
    }
    
}
let getDrives=async(req,res)=>
{
    try
    {
        let r=await drivemodel.find({})
        res.json(r)
    }
    catch(err)
    {

        console.log(err);
        
    }
}
let deleteAlldrives=async(req,res)=>
{
    try
    {
        await drivemodel.deleteMany({});
        res.json({"msg":"All drives Deleted"})

    }
    catch(err)
    {
        console.log(err);
        
    }
}
module.exports={getDrives,adddrive,deleteAlldrives}