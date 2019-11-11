const mongoose=require('mongoose');

const educationSchema=new mongoose.Schema({
    degree:{
        type:String,
        required:true
    },
    institute:{
        type:String,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true

    }
});
const Education=mongoose.model('Education',educationSchema);
module.exports=Education;