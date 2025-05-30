const express = require('express');

const {BookingController} = require('../../contollers/index');

 
// const {createChannel} = require('../../utils/messageQueue');
// const channel = await createChannel();
const bookingController = new BookingController(); 
const router = express.Router();

router.get('/info',(req,res)=> {
    return res.json({message: 'Response from routes'});
})
router.post('/bookings',bookingController.create);
// router.use('/v1',v1ApiRoutes);
router.post('/publish',bookingController.sendMessageToQueue);

module.exports = router;

