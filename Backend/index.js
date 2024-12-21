let express = require("express");
let mongoose = require("mongoose");
const userRoute = require("./routes/user.route");
var bodyParser = require('body-parser');
const { blogRoute } = require("./routes/blog.route");
let cors = require("cors");
const driveRoute = require("./routes/drive.route");
let app = express()
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/Donate").then((res) => {
    console.log("data base connected");
}).catch((err) => {
    console.log(err);
})
app.use(cors())
app.use("/", userRoute);
app.use("/blogs", blogRoute);
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/images", express.static("./images"))
app.use("/drives", driveRoute)
app.listen(5000);
