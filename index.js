const express=require('express');
const port=8000;
const app=express();

const expressLayouts=require('express-ejs-layouts');

app.use(expressLayouts);

app.get('/',require('./routes'));
//set up view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        consolr.log(`error is : ${err}`);
        return;
    }
    console.log(`port is running on port no.: ${port}`);




})