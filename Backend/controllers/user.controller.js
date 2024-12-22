let bcrypt = require("bcryptjs");
let userModel = require('../models/user.model')
let jwt = require("jsonwebtoken")
let { GoogleGenerativeAI } =require("@google/generative-ai");
require('dotenv').config();

let multer = require("multer")
let nodemailer=require("nodemailer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + "." + file.mimetype.split("/")[1])
    }
})

const upload = multer({ storage: storage })
let reg = async (req, res) => {
    console.log(req.body);

    try {
        let obj = await userModel.findById({ _id: req.body._id });
        if (obj) {
            res.json({ "msg": "Account exists" })
        }
        else {
            let hash = await bcrypt.hash(req.body.pwd, 10);

            let data = new userModel({ ...req.body, "pwd": hash, "photo": req.file.filename });
            await data.save();
            res.json({ "msg": "Accout is created" })
        }
    }
    catch (err) {
        res.json({ "msg": "All Fileds are required" })
        console.log(err);
        

    }
}
let login = async (req, res) => {
    try {
        let data = await userModel.findById({ "_id": req.body._id });
        if (data) {
            let t = await bcrypt.compare(req.body.pwd, data.pwd)
            if (t) {
                res.json({
                    "token": jwt.sign({ "_id": data._id, "name": data.name }, "Rohith"), "name": data.name, "email": data.email,
                    "_id": data._id,
                    'age': data.age,
                    "role": data.role,
                    "group": data.group,
                    "dob": data.dob,
                    "mobile": data.mobile,
                    "photo": data.photo

                })
            }
            else {
                res.json({ "msg": "Invalid password" })

            }

        }
        else {
            res.json({ "msg": "Invalid user-Id" })
        }

    }
    catch (err) {
        console.log(err);

    }

}
let getBlood = async (req, res) => {
    try {
        let r = await userModel.find({ "group": req.params.group })
        res.json(r)
    }
    catch (err) {
        console.log(err);

    }
}
let getAll = async (req, res) => {
    try {
        let t = await userModel.find({})
        res.json(t)
    }
    catch (err) {
        console.log(err);

    }
}
let getCity = async (req, res) => {
    try {
        let t = await userModel.find({ "add": req.params.add })
        res.json(t)

    }
    catch (err) {
        console.log(err);

    }
}
let delMyAct = async (req, res) => {
    try {
        await userModel.findOneAndDelete({ "_id": req.params._id })
        console.log(req.params._id);
        res.json({ "msg": "kkkk" })

    }
    catch (err) {
        console.log(err);

    }
}
let updAct = async (req, res) => {
    try {
        let r = await userModel.findById({ "_id": req.body._id });
    }
    catch (err) {
        console.log("hello");
    }
}
let contact = async (req, res) => {
    console.log("req");
    let r=req.headers.authorization
    try {
       

        const transporter = nodemailer.createTransport({
            secure:true,
            host: 'smtp.gmail.com',
            port: 465,
            auth: { 
                user: 'rk8514269@gmail.com',
                pass: 'swwffrrdebimsozp'
            }
        });

        async function main() {
            const info = await transporter.sendMail({
                
                to: r,
                subject: "Blood Donation  ",
                text: "Hi I required blood can please contact share your availabilty",
                html: "<b>Hi I required blood can please contact share your availabilty?</b>",
            });

            console.log("Message sent: %s", info.messageId);
        }

        main().catch(console.error);

    }
    catch (err) {

    }
}
let abc=async(req,res)=>
{
    try 
    {
        let b=await userModel.aggregate([{$group:{"_id":"$group","total":{$sum:1}}}])
        res.json(b);

    }
    catch(err)
    {
        console.log(err);
        
    }
}
let abcd=async(req,res)=>
    {
        try 
        {
            let b=await userModel.aggregate([{$group:{"_id":"$gender","total":{$sum:1}}}])
            res.json(b);
    
        }
        catch(err)
        {
            console.log(err);
            
        }
    }
    
    const isadmin=(req,res,next)=>
        {
            let d=req.headers.authorization;
            console.log(d);
            try
            {
                if(d=='Admin')
                    {
                        next()
                    }
                    else
                    {
                        res.json("err");
                        return res.status(401).json({ msg: "Access denied. No token provided." });

                    }

            }
            catch(err)
            {
                res.json("err")
            }
          
            
        
        }
        const islogin=async (req,res,next)=>
            {
                const token = await req.headers.authorization;
                console.log(token);
                       
                let t=await jwt.verify(token,"Rohith")
                      
                       if(t)
                       { 
                           
                           next();
                       }
                       else
                       {
                        return res.status(401).json({ msg: "Access denied. No token provided." });
                       }
            }
            
            
        let getchatgpt=async(req,res)=>
        {
            let b=req.body.rdata;
            
            
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = b;
if(b)
{
try
{
    const result = await model.generateContent(prompt);

    console.log(result.response.text());
    res.json(result.response.text())
}
catch(err)
{
    console.log(err);
    

}}
else{
    res.json({"msg":"Invalid Request Sahi se Search Karo"})
}


        }
        let otp = async (req, res) => {
            console.log("req");
            let r=req.body.email
            let v=Math.floor(Math.random()*(4000)+1000);
            try {
               
        
                const transporter = nodemailer.createTransport({
                    secure:true,
                    host: 'smtp.gmail.com',
                    port: 465,
                    auth: { 
                        user: 'rk8514269@gmail.com',
                        pass: 'swwffrrdebimsozp'
                    }
                });
        
                async function main() {
                    const info = await transporter.sendMail({
                        
                        to: r,
                        subject: "Blood Donation  ",
                        text: "Hi I required blood can please contact share your availabilty",
                        html: `<b>Thank you for Registration </br> Your OTP is ${v}</b>`,
                    });
        
                    console.log("Message sent: %s", info.messageId);
                }
                res.json(v)
        
                main().catch(console.error);
        
            }
            catch (err) {
        
            }
        }
        let otplogin = async (req, res) => {
            console.log(req.body)
            try {
                let data = await userModel.find({ "email": req.body.email });
                console.log(data);
                
              
                  
                    if (data) {
                        res.json({
                            "token": jwt.sign({ "_id": data[0]._id, "name": data[0].name }, "Rohith"), "name": data[0].name, "email": data[0].email,
                            "_id": data[0]._id,
                            'age': data[0].age,
                            "role": data[0].role,
                            "group": data[0].group,
                            "dob": data[0].dob,
                            "mobile": data[0].mobile,
                            "photo": data[0].photo
        
                        })
                    }
                    else {
                        res.json({ "msg": "Invalid password" })
        
                    }
        
               
            }
            catch (err) {
                console.log(err);
        
            }
        
        }
module.exports = { reg, login, getBlood, getCity, getAll, delMyAct, updAct, upload, contact ,otplogin,abc,abcd,isadmin,islogin,getchatgpt,otp}