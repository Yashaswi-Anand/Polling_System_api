const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/PollingAPI',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console,'Error conection on mongodb'));

db.once('open', function(){
    console.log('Connected to database :: MongoDB');
});

module.exports = db;

// hdTWy3cXmZvkxnXl

// mongodb+srv://YashaswiAnand:<password>@pollingapicluster.ehch0bc.mongodb.net/?retryWrites=true&w=majority