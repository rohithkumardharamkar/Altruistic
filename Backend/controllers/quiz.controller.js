let qmodel=require("../models/quiz.model");

let addquiz=async(req,res)=>
{
    try
    {
      let d=await qmodel({...req.body});
        await d.save();
        res.send("Questions and answers are uploaded");
    }
    catch(err)
    {
        console.log(err); 
    }
}

let getAllQ=async(req,res)=>
{
    try
    {
        let  y=await qmodel.find({})
        res.json(y);
    }
    catch(err)
    {
        console.log(err);
    }
}
module.exports={getAllQ,addquiz};