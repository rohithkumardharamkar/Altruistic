const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    _id: { type: Number, required: true },  
    name: { type: String, required: true },
    age: { type: Number },
    email: { type: String, required: true, unique: true },
    photo: { type: String },
    add: { type: String },
    mobile: { type: Number },
    group: { type: String },
    gender: { type: String },
    pwd: { type: String, required: true },
    dob: { type: String },
    role: { type: String, default: 'user' },  
   
}, { timestamps: true });  

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
