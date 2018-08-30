import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/LoginReg", { useNewUrlParser: true })
    .then(() => {
        console.log('connected to db');
    })
    .catch(() => {
        console.log('connection failed');
    });


module.exports = mongoose;
