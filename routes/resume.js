const express=require('express');
const router=express.Router();
const resumeController=require('../controllers/resume_controller');


router.post('/create',resumeController.create);

console.log('resume router is working');
module.exports=router;