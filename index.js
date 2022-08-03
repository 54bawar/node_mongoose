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
        
        return Dishes.findByIdAndUpdate(dish._id,{ $set : {description:'Updated test'}},{new:true}).exec();

    }).then((dish)=>{
        console.log(dish);
        dish.comments.push({
            rating:4,
            comment:'Good Taste of Food',
            author:'Leonardo Di Carpaccio'
        })
        return dish.save();

    }).then((dish)=>{
        console.log(dish);

        return Dishes.deleteMany({});
    }).then((res)=>{
        console.log(res);

        return mongoose.connection.close();
    }).catch((err)=>{
        console.log(err);
    })

}).catch((err)=>{
    console.log(err);
});