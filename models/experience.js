const mongoose=require('mongoose');

const experienceSchema=new mongooseSchema({
    companyName:{
        type:String,
        required:true
    },
    description:{
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
const Experience=mongoose.model('Experience',experienceSchema);
module.exports=Experience;