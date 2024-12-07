const express = require("express");
const app = express();

//THIS SETS UP EJS AS RENDER ENGINE. HTML must be .ejs and MUST BE IN VIEWS FOLDER
app.set('view engine','ejs');

app.get("/:name/:lang",(req,res) => {
    var name = req.params.name;
    var lang = req.params.lang;
    var ShowMsg = true;

    var items = [
        {name: "Mountain Dew", price: 2.50},
        {name: "Halo 3", price: 60.00},
        {name: "Borderlands", price: 40.00},
        {name: "Batman: Arkham Asylum", price: 59.95},
        {name: "FortNite", price: 0.00},
        {name: "Jedi - Fallen Order", price: 65.00},
        {name: "Roller Coaster Tycoon", price: 15.00},
        {name: "Sid Meyer's Locomotion", price: 5.00},
        {name: "Desperados", price: 2.00},
        {name: "Kingdom Hearts 1", price: 30.00},
        {name: "Kingdom Hearts - Birth By Sleep", price: 20.00},
        {name: "Kingdom Hearts 2", price: 40.00},
        {name: "Kingdom Hearts - Dream Drop Distance", price: 9.00},
        {name: "Kingdom Hearts 3", price: 60.00},

    ]
    res.render("index",{
        name: name,
        lang: lang,
        company: "FacchiDev",
        ShowMsg: ShowMsg,
        items: items
    });
});

app.listen(8080, ()=>{
    console.log("App up!");
});