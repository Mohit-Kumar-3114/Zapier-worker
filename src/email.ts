const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure:true,
  auth: {
      user: process.env.USER,
      pass: process.env.PASS
  }
});


export async function sendEmail(to:String, body:String) {
 
  const info = await transporter.sendMail({
    from: 'mohitop1234567890@gmail.com', 
    to,
    subject: "Hello", 
    text: body
  });

}
