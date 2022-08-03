const mongoose = require('mongoose');
const Dishes = require('./models/dishes');

const url ='mongodb://127.0.0.1:27017/';

const connect = mongoose.connect(url);

connect.then((db)=>{
    console.log('Connected to Database');

    var newDish=Dishes({
        name:"UthaPizza",
        description:"Test"
    });
    newDish.save().then((dish)=>{
        console.log(dish);
        return Dishes.find({});
    }).then((dishes)=>{
        console.log(dishes);
        return Dishes.remove({});
    }).then((result)=>{
        console.log(result);
        return mongoose.connection.close();
    }).catch((err)=>{
        console.log(err);
    });

}).catch((err)=>{
    console.log(err);
});