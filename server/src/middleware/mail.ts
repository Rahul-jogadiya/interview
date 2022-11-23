// import nodemailer from "nodemailer"
// import config from "config"

// const nodeMail: any = config.get("nodeMail")

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     service: nodeMail.service,
//     auth: {
//         user: nodeMail.mail,
//         pass: nodeMail.password,
//     },
// });
// export const send_mail_otp = async (user, otp) => {


//     return new Promise(async (resolve, reject) => {
//         try {
//             let params = {
//                 from: nodeMail.mail,
//                 to: user.email,
//                 subject: "Forgot password",
//                 html: `  <head>
//                                                     <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
//                                                     <title>Reset Password Email Template</title>
//                                                     <meta name="description" content="Reset Password Email Template.">
//                                                     <style type="text/css">
//                                                         a:hover {text-decoration: underline !important;}
//                                                     </style>
//                                                 </head>
//                                                 <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
//                                                     <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8" style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
//                                                         <tr>
//                                                             <td>
//                                                                 <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
//                                                                     <tr>
//                                                                         <td style="height:80px;">&nbsp;</td>
//                                                                     </tr>
//                                                                     <tr>
//                                                                         <td style="height:20px;">&nbsp;</td>
//                                                                     </tr>
//                                                                     <tr>
//                                                                         <td>
//                                                                             <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
//                                                                                 <tr>
//                                                                                     <td style="height:40px;">&nbsp;</td>
//                                                                                 </tr>
//                                                                                 <tr>
//                                                                                     <td style="padding:0 35px;">
//                                                                                         <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">Real Estate ui forgot password</h1>
//                                                                                         <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
//                                                                                         <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
//                                                                                             Hi ${user.name}
//                                                                                             <br>
//                                                                                             Someone, hopefully you, has requested to reset the password for your
//                                                                                             Private Chef marketPlace account.
//                                                                                             <br>
//                                                                                             OTP will expire in 5 minutes.
//                                                                                             <br>
//                                                                                             Verification code: ${otp}
//                                                                                             <br>
//                                                                                             <br>
//                                                                                             Thanks,
//                                                                                             <br>
//                                                                                             Private Chef marketPlace
//                                                                                         </p>
//                                                                                     </td>
//                                                                                 </tr>
//                                                                                 <tr>
//                                                                                     <td style="height:40px;">&nbsp;</td>
//                                                                                 </tr>
//                                                                             </table>
//                                                                         </td>
//                                                                         <tr>
//                                                                             <td style="height:20px;">&nbsp;</td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td style="text-align:center;"><strong>www.PrivateChefMarketPlace.com</strong></p></td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td style="height:80px;">&nbsp;</td>
//                                                                         </tr>
//                                                                     </tr>
//                                                                 </table>
//                                                             </td>
//                                                         </tr>
//                                                     </table>
//                                                 </body>
//                                             </html>
//                                                  `
//             };
//             await transporter.sendMail(
//                 params,
//                 (err, data) => {
//                     if (err) {
//                         reject(err)
//                         console.log(err, err.stack); // an error occurred
//                     }
//                     else {
//                         resolve(`Email has been sent to ${user.email}, kindly follow the instructions`)
//                         // console.log(data);
//                     }
//                 }
//             )
//             console.log("email sent successfully");

//         } catch (error) {
//             console.log(error, "email not sent");
//         }
//     })

// }