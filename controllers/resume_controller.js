const userInfo=require('../models/user-info');
const Education=require('../models/education');
const Experience=require('../models/experience');
const Project=require('../models/project');


module.exports.create=function(req,res){
    //console.log(req.params);
    console.log(req.body);
    // console.log(req.body.phone);
    // console.log(req.params.phone);
    userInfo.create({
        name:req.body.name,
        email:req.body.email,
        description:req.body.description,
        phone:req.body.phone

    },function(err){
        if(err){
            console.log('error in populating user info db');
            return;
        }
    });
    Education.create({
        degree:req.body.degree,
        institute:req.body.institute,
        startDate:req.body.edstart,
        endDate:req.body.edend
    },function(err){
        if(err){
            console.log("error in populating education DB");
            return;
        }
    });
    Experience.create({
        organisation:req.body.organisation,
        description:req.body.exdescription,
        startDate:req.body.exstart,
        endDate:req.body.exend
    },function(err){
        if(err){
            console.log("error in population experience DB");
            return;
        }
    });
    Project.create({
        title:req.body.title,
        description:req.body.projectdescription,
        link:req.body.link
        
    },function(err){
        if(err){
            console.log("error in population project DB");
            return;
        }
    });

    return res.redirect('back');
}
module.exports.fetch=function(req,res){
    return res.render('resume');
}