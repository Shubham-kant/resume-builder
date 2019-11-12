const mongoose=require('mongoose');

const projectSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        //name of model to be linked
        ref:'Info'
    },
    link:{
        type:String

    }
    
},{
    timestamps:true

});
const Project=mongoose.model('Project',projectSchema);
module.exports=Project;