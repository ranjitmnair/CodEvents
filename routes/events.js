const express=require('express');
const router=express.Router();
const eventController=require('../controllers/registerevent');

router.get('/hackathons/show',eventController.showallhackathons);
router.get('/codingcontests/show',eventController.showallcodingcontests);
router.get('/webinars/show',eventController.showallwebinars);

router.post('/hackathonregister',eventController.registerforhackathon);
router.post('/codingcontestregister',eventController.registerforcodingcontests);
router.post('/webinarregister',eventController.registerforwebinars);
router.post('/getallevents',eventController.getallevents);

module.exports=router;