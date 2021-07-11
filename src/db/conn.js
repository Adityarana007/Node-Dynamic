const mongoose = require("mongoose");

// Creating a database
mongoose.connect("mongodb://localhost:27017/merndynamic", {
    useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection successful");
}).catch((error)=>{
    console.log(error);
}) 