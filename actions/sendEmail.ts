"use server";

import React from "react";
import { Resend } from "resend";


const resend = new Resend("re_dJTK5CpX_Nm493JPgoXNW7PsBuoP7iP9H");

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


  
