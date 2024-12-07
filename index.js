const express = require("express");
const app = express();

//THIS SETS UP EJS AS RENDER ENGINE. HTML must be .ejs and MUST BE IN VIEWS FOLDER
app.set('view engine','ejs');

app.get("/:name/:lang",(req,res) => {
    var name = req.params.name;
    var lang = req.params.lang;
    var ShowMsg = false;
    res.render("index",{
        name: name,
        lang: lang,
        company: "FacchiDev",
        ShowMsg: ShowMsg
    });
});

app.listen(8080, ()=>{
    console.log("App up!");
});