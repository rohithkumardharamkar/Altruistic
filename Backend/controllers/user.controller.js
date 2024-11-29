let bcrypt=require("bcrypt");
let userModel=require('../models/user.model')
let jwt=require("jsonwebtoken");
let reg=async(req,res)=>
{
    try
    {
        let obj=await userModel.findById({_id:req.body._id});
        if(obj)
        {
            res.json({"msg":"Account exists"})
        }
        else
        {
           let hash=await bcrypt.hash(req.body.pwd,10);
           
            let data=new userModel({...req.body,"pwd":hash});
            await data.save();
            res.json({"msg":"Accout is created"})
        }
    }
    catch(err)
    {
        res.json({"msg":err})
        
    }
}
let login=async(req,res)=>
{
    try
    {
        let data=await userModel.findById({"_id":req.body._id});
        if(data)
        {
            let t=await bcrypt.compare(req.body.pwd,data.pwd)
            if(t)
            {
            res.json({"token":jwt.sign({"_id":data._id,"name":data.name},"Rohith"),"name":data.name,"email":data.email,
            "_id":data._id,
            'age':data.age,
            "role":data.role,
            "group":data.group,
            "dob":data.dob,
            "mobile":data.mobile,
            "photo":data.photo

           })
            }
            else
            {
                res.json({"msg":"Invalid password"})

            }
            
        }
        else{
            res.json({"msg":"Invalid Credentials"})
        }
        
    }
    catch(err)
    {
        console.log(err);
        
    }

}
let getBlood=async(req,res)=>
{
    try
    {
        let r=await userModel.find({"group":req.params.group})
        res.json(r)
    }
    catch(err)
    {
        console.log(err);
        
    }
}
let getAll=async(req,res)=>
{
    try
    {
        let t=await userModel.find({})
        res.json(t)
    }
    catch(err)
    {
        console.log(err);
        
    }
}
let getCity=async(req,res)=>
{
    try
    {
        let t=await userModel.find({"add":req.params.add})
        res.json(t)

    }
    catch(err)
    {
        console.log(err);
        
    }
}
let delMyAct=async(req,res)=>
    {
        try
        {
            
            await userModel.findOneAndDelete({"_id":req.params._id})
            console.log(req.params._id);
            
           res.json({"msg":"kkkk"})
            
        }
        catch(err)
        {
            console.log(err);
            
        }
    }
let updAct=async(req,res)=>
{
    try
    {
        console.log("hi");
        

    }
    catch(err)
    {
        console.log("hello");
        
    }
}

module.exports={reg,login,getBlood,getCity,getAll,delMyAct}