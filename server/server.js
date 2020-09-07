const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();


//Keys
const dbURI = require('./config/globalkeys').mongoDBURI;



//AppInit
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//MongoDB Init Connect
mongoose.connect(
    dbURI,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));


//Routes
const users = require('./routes/user.route');
//MainApps
app.use(passport.initialize());
require("./config/passport")(passport);


app.use("/users", users);

const port = process.env.PORT || 5000;
app.listen(port,()=>console.log("Server running on  http://localhost:"+port))
