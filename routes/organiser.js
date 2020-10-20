const express=require('express');
const router=express.Router();
const eventController=require('../controllers/createevent');

router.post('/createevent',eventController.create);


module.exports=router;