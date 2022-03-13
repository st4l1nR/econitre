import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import mg from "mailgun-js";

const mailgun = mg({
  apiKey: process.env.MAILGUN_PRIVATE_KEY as string,
  domain: process.env.MAILGUN_DOMAIN as string,
});
const handler = nextConnect();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {firstName, lastName,  subject, email, message } = req.body;
    const data = {
      from: email,
      to: "wilsonramos79@hotmail.com",
      subject: `${subject} (${firstName} ${lastName})`,
      text: message,
    };
    mailgun.messages().send(data, function (error, body) {
      if (error) throw error
      res.json({success:true, message:"Message sent"})
    });
    
  } catch (error) {
    console.log(error)
    res.json({success:false, error})
  }
});

export default handler;