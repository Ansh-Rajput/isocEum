const {google} = require('googleapis');
const nodemailer = require('nodemailer');
require('dotenv').config()

const oAuth2Client = new google.auth.OAuth2(
 process.env.OAUTH_CLIENT_ID,
 process.env.OAUTH_CLIENT_SECRET,
 process.env.REDIRECT_URI
);

oAuth2Client.setCredentials({refresh_token:process.env.OAUTH_REFRESH_TOKEN});
let accessToken;
oAuth2Client.getAccessToken().then((data)=>{
  accessToken = data;
}).catch((error)=>{
  console.log(error);
});
// Configure Nodemailer for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
    auth: {
      type:'OAUTH2',
      user: process.env.MY_EMAIL,
      clientId:process.env.OAUTH_CLIENT_ID,
      clientSecret:process.env.OAUTH_CLIENT_SECRET,
      refreshToken:process.env.OAUTH_REFRESH_TOKEN,
      accessToken:accessToken,
    },
    tls:{
      rejectUnauthorized:true,
    }
  });
module.exports = transporter;