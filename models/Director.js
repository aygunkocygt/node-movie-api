const  mongoose = require('mongoose');

const Directorschema = new mongoose.Schema({
    name:{
        type: String,
        maxlength:60,
        minlength:2
    },
    surname:{
        type:String,
        maxlength: 60,
        minlength: 2
    },
    bio:{
        type:String,
        maxlength:1000,
        minlength:60
    },
    createdAt: {
        type:Date,
        default:Date.now
    }



});

module.exports = mongoose.model('director',Directorschema);