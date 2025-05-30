const {BookingService} = require('../services/index');
const {StatusCodes} = require('http-status-codes');


const {createChannel,publishMessage} = require('../utils/messageQueue');
const {REMINDER_BINDING_KEY} = require('../config/serverConfig');
const bookingService = new BookingService();


class BookingController{

   constructor() {
     
   }

   async sendMessageToQueue(req,res){

          const channel = await createChannel();
          const payload ={
            //  message: 'Success',
            data: {
               subject: 'This is a notif from queue',
               content: 'Some queue will subscribe this',
               recipientEmail: '22143@iiitu.ac.in',
               notificationTime: ' 2025-05-24 11:27:48', 
            },
            service: 'CREATE_TICKET',

          };
          publishMessage(channel,REMINDER_BINDING_KEY,JSON.stringify(payload));
          return res.status(200).json(
            {
               message: 'Successfully published the message'
            }
          )
   }
   async create (req,res) {

    try {

    const response = await bookingService.createBooking(req.body);
    console.log("FROM FLIGHT CONTROLLER",response);
    return res.status(StatusCodes.OK).json({
       message: "Successfully completed the booking",
       success: true,
       err: {},
       data: response
    });

 } catch (error) {
    console.log("FROM BOOKING CONTROLLER",error);
    throw res.status(error.statusCode).json({
        message: error.message,
        success: false,
        err: error.explanation,
        data: {}
    });
    
 }

}


}


module.exports = BookingController