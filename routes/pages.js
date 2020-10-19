const express=require('express');
const router=express.Router();

router.get('/userregister',(req,res)=>{
    res.render('userregister');
});

router.get('/userlogin',(req,res)=>{
    res.render('userlogin');
});

router.get('/organiserregister',(req,res)=>{
    res.render('organiserregister');
});

router.get('/organiserlogin',(req,res)=>{
    res.render('organiserlogin');
})

module.exports=router;