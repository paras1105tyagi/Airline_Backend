const bodyParser = require("body-parser");
const express = require("express");
require("dotenv").config(); 

const {PORT} = require("./config/serverConfig"); 
const {sendBasicEmail}= require('./services/email-service');
const TicketController = require('./controllers/ticket-controller');

const jobs = require('./utils/job');
const {REMINDER_BINDING_KEY} = require('./config/serverConfig');
const {subscribeMessage,createChannel} = require('./utils/messageQueue');
const setupAndStartServer =  async() =>{
// const cron = require('node-cron');

const app = express();
const EmailService = require('./services/email-service');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

const channel = await createChannel();
subscribeMessage(channel,EmailService.subscribeEvents,REMINDER_BINDING_KEY);

app.post('/api/v1/tickets',TicketController.create);    
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);  
    // jobs();
   
    // sendBasicEmail(
    //     'support@admin.com',
    //     '22143@iiitu.ac.in',
    //     'This is a testing mail',
    //     'Hii there, this is a testing mail from the reminder service'
    // );

    // cron.schedule('*/2 * * * *', () => {
    //     console.log('running a task every two minutes');
    // });
   
});

}




setupAndStartServer();
