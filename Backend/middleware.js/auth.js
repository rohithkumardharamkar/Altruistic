const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        console.log(token);
        
        let t=jwt.verify(token,"Rohith")
       
        if(t)
        {
            console.log(t);
        }
        else
        {
            console.log("err");
            return res.status(401).json({ msg: "Access denied. No token provided." });
            
        }
        next();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Internal server error" });
    }
};

module.exports = {auth};
