const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default: 'user',
    },
    cart:{
        type:Array,
        default: [],
    },
    adress:[{type: mongoose.Types.ObjectId, ref: 'Adress'}],
    whishlist:[{type: mongoose.Types.ObjectId, ref: 'Product'}],
    isBlocked: {
        type: Boolean,
        default: false
    },
    refreshToken: {
        type: String,
    },
    passwordChangeAt:{
        type: String
    },
    passwordResetToken: {
        type: String
    },
    passwordResetExpires: {
        type: String
    }  
}, {
    timestamps: true
});

//Export the model
module.exports = mongoose.model('User', userSchema);
