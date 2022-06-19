const mongoose = require('mongoose');

 productSchema = mongoose.Schema({
     _id:mongoose.Schema.Types.ObjectId,
    name: {
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
    },

    gender:{
        type:String,
        required:true
    
}
},)

module.exports = mongoose.model('Product' , productSchema);