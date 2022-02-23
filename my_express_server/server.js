const express = require("express");
const app = express();


app.get("/",function(req,res){
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact",function(req,res){
  res.send("Contact me at: https://github.com/gtm1224");
});


app.listen(3000,function(){
  console.log("server started on port 3000");
});