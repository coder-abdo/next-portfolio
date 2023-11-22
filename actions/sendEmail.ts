"use server";
import { ContactFormEmail } from "@/components/contact/form";
import { errorResponse, validateInputs } from "@/utils";
import React from "react";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  if (!validateInputs("message", 5000)) {
    return { error: "Invalid message" };
  }
  if (!validateInputs("email", 500)) {
    return { error: "Invalid sender email" };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "a.h2020.2007@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        senderEmail: senderEmail as string,
        message: message as string,
      }),
    });
  } catch (e) {
    return { error: errorResponse(e) };
  }
  return { data };
};
