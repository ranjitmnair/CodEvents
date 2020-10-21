const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.render('main');
})

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

router.get('/organiserdashboard',(req,res)=>{
    res.render('organiserdashboard');
})

router.get('/userdashboard',(req,res)=>{
    res.render('userdashboard');
})

router.get('/events/hackathons',(req,res)=>{
    res.render('hackathons')
})

router.get('/events/codingcontests',(req,res)=>{
    res.render('hackathons')
})
module.exports=router;