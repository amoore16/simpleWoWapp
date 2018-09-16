const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/WoWDB', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded. Have a nice day!');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2 ));
});

module.exports = mongoose;