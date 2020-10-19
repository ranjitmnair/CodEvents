const express=require('express');
const router=express.Router();
const authController=require('../controllers/userauth');
const orgAuthController=require('../controllers/organiserauth');
router.post('/userregister',authController.register);

router.post('/userlogin',authController.login);

router.post('/organiserregister',orgAuthController.register);

router.post('/organiserlogin',orgAuthController.login);


module.exports=router;