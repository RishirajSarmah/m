const mongoose = require ('mongoose')
const dbSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"must provide name"]
    },
    email:{
        type: String,
       
        required: [true,"must provide email"]
    },
   password:{
        type: String,
        required: [true,"must provide password"]
    }

})
module.exports=mongoose.model('user_accounts',dbSchema)