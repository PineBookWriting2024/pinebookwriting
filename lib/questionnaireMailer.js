import nodemailer from "nodemailer";

// Shared SMTP configuration used by the existing cover brief and editing brief.
export function createQuestionnaireTransport() {
  return nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: Number(process.env.SMTP_PORT || 465) === 465,
      auth: {
        user: process.env.SMTP_USER || "pinebookwriting@gmail.com",
        pass: process.env.SMTP_PASSWORD || "bqastuelflumgjql",
      },
    });
}

export const questionnaireSender = process.env.SMTP_USER || "pinebookwriting@gmail.com";
export const questionnaireRecipient = process.env.QUESTIONNAIRE_EMAIL_TO || "pinebookwriting@gmail.com";
