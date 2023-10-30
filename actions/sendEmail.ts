"use server";

import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!message || typeof message !== "string"){
    return {
        error: "invalid message"
    }
  }
  if(!senderEmail || typeof senderEmail !== "string"){
    return {
        error: "invalid email"
    }
  }

  await resend.emails.send({
      from: "Contact Form<onboarding@resend.dev>",
      to: "saima.ahmed.2528@gmail.com",
      subject: "Message from Contact Form",
      reply_to: senderEmail,
      text: message
    });  
  } 


  
