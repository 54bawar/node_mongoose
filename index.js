const mongoose = require('mongoose');
const Dishes = require('./models/dishes');

const url ='mongodb://127.0.0.1:27017/';

const connect = mongoose.connect(url);

connect.then((db)=>{
    console.log('Connected to Database');

    Dishes.create({
        name:'UthaPizza',
        description:'Test'
    }).then((dish)=>{
        console.log(dish);
        return Dishes.find({}).exec();
    }).then((dishes)=>{
        console.log(dishes);
        return Dishes.deleteMany({});
    }).then((res)=>{
        console.log(res);

        return mongoose.connection.close();
    })

}).catch((err)=>{
    console.log(err);
});