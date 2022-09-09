const express = require('express');
const port = 5000
const app = express();
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const questionRoute = require('./routes/questionRoutes');
const optionRoute = require('./routes/optionRoutes');
var cors = require('cors')


//cors
var corsOptions = {
    origin: '*',
  }
app.use(cors(corsOptions));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// question route
app.use('/question',questionRoute);
// option route
app.use('/option', optionRoute);


// app return inital result.
app.get('/', (req,res) =>{
    res.send("Running my nodeJS server!!!");
})

app.listen(port, function(err){
    if(err) {console.log("error"); return;}
    console.log(`running server on port: ${port}`);
});