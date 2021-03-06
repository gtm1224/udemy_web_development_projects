// set up
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
const app =express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');

//init variables:
let items=[];
let workItems=[];


//get method:
app.get("/",function(req,res){
    
    // console.log(day);
    res.render("list",{listTitle:date.getDate(),newListItem: items});

});

app.post("/",function(req,res){
    // console.log(req.body);
    let item=req.body.newItem;
    if (req.body.list==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work",newListItem: workItems});
});

// app.post("/work",function(req,res){
//     res.redirect("/work");
// });



app.listen(3000,function(){
    console.log("Server started on port 3000");
});