import nodemailer from "nodemailer";

// Shared SMTP configuration used by the existing cover brief and editing brief.
export function createQuestionnaireTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 465),
    secure: Number(process.env.SMTP_PORT || 465) === 465,
    auth: {
      user: process.env.SMTP_USER || "pinebookwriting@gmail.com",
      pass: process.env.SMTP_PASSWORD || "kxjmsayfrpnxnjss",
    },
  });
}

export const questionnaireSender = process.env.SMTP_USER || "pinebookwriting@gmail.com";
export const questionnaireRecipient = "support@pinebookwriting.com";
