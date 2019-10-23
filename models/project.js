const mongoose=require('mongoose');

const projectSchema=new mongooseSchema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    
});
const Project=mongoose.model('Project',projectSchema);
module.exports=Project;