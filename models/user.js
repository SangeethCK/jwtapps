const mongoose = require('mongoose');

 userSchema = mongoose.Schema({
     _id:mongoose.Schema.Types.ObjectId,
    username: {
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true,
    },

    phone:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
     userType:{
        type:String,
        required:true,
       
    }
})

module.exports = mongoose.model('user' , userSchema);