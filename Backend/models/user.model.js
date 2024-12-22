const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    _id: { type: Number, required: true },  
    name: { type: String, required: true },
  
    email: { type: String, required: true, unique: true },
    photo: { type: String, default: "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg" },
    add: { type: String , required: true},
    mobile: { type: Number, required: true },
    group: { type: String, required: true },
    gender: { type: String , required: true},
    pwd: { type: String, required: true },
    dob: { type: String , required: true},
    role: { type: String, default: 'user' }
   
}, { timestamps: true });  

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
