const nodemailer = require('nodemailer');
const {EMAIL_ID, EMAIL_PASS} = require('./serverConfig');
const sender = nodemailer.createTransport({
    service: 'gmail',             
});

module.exports = sender;