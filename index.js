const express = require('express');
const port = 5000
const app = express();
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const questionRoute = require('./routes/questionRoutes');


// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// question route
app.use('/question',questionRoute);

// app return inital result.
app.get('/', (req,res) =>{
    res.send("Running my nodeJS server!!!");
})

app.listen(port, function(err){
    if(err) {console.log("error"); return;}
    console.log(`running server on port: ${port}`);
});