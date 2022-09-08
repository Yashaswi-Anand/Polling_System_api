const express = require('express');
const port = 5000
const app = express();
const db = require('./config/mongoose');

app.get('/', (req,res) =>{
    res.json({message:"start"})
})

app.listen(port, function(err){
    if(err) {console.log("error"); return;}
    console.log(`running server on port: ${port}`);
});