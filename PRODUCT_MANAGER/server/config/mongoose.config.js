const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(()=>console.log("Database connection established..."))
    .catch(err=>console.log("Error connecting to Database", err))