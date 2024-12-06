const express = require("express");
const app = express();

//THIS SETS UP EJS AS RENDER ENGINE. HTML must be .ejs and MUST BE IN VIEWS FOLDER
app.set('view engine','ejs');

app.get("/",(req,res) => {
    res.render("index");
});

app.listen(8080, ()=>{
    console.log("App up!");
});