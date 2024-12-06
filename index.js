const express = require("express");
const app = express();

app.get("/",(req,res) => {
    res.send("Route working");
});

app.listen(8080, ()=>{
    console.log("App up!");
});