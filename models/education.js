const mongoose=require('mongoose');

const educationSchema=new mongooseSchema({
    degree:{
        type:String,
        required:true
    },
    instituteName:{
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