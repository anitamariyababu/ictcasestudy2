const express = require('express');
const adminRouter=express.Router();
const Authordata = require('../model/Authordata');
function router(nav){
adminRouter.get('/',function(req,res){
    res.render('addauthor',{
        nav,
        title:'Library'
    });
});
adminRouter.post('/admin',function(req,res){
    var item={
        name:req.body.name,
         dob:req.body.dob,
          genre2:req.body.genre,
          image2:req.body.image
      }
      var author=Authordata(item);
      author.save();
      res.redirect('/authors');
     
     });
    

 return adminRouter;
}
module.exports=router;