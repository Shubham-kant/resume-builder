const mongoose=require('mongoose');

const infoSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String

    },
    phone:{
        type:Number,
        unique:true
    }

});
const Info=mongoose.model('Info',infoSchema);
module.exports=Info;