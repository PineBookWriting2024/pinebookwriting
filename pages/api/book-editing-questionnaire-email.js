import { sections, isVisible, validateQuestionnaire } from '../../lib/bookEditingQuestionnaire';
import { createQuestionnaireTransport, questionnaireSender, questionnaireRecipient } from '../../lib/questionnaireMailer';

const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

export const config = { api: { bodyParser: { sizeLimit: '64kb' } } };

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }
  const { values, error } = validateQuestionnaire(req.body);
  if (error) return res.status(400).json({ success: false, message: error });

  const text = sections.map(section => `${section.shortTitle.toUpperCase()}\n${section.fields.filter(field => isVisible(field, values)).map(field => `${field.label}: ${values[field.name] || 'Not provided'}`).join('\n\n')}`).join('\n\n--------------------\n\n');
  const html = `<div style="background:#f7f6f1;padding:24px;font-family:Arial,sans-serif;color:#243b34"><div style="max-width:760px;margin:auto;background:#fff;padding:28px;border-radius:12px"><h1 style="color:#185b4d;font-size:24px">Book Proofreading &amp; Formatting Questionnaire</h1><p>New book editing brief from ${escapeHtml(values.authorName)}.</p>${sections.map(section => `<h2 style="padding:14px;background:#edf2e9;font-size:19px">${escapeHtml(section.shortTitle)}</h2><table style="border-collapse:collapse;width:100%">${section.fields.filter(field => isVisible(field, values)).map(field => `<tr><th style="padding:12px 8px;text-align:left;vertical-align:top;border-bottom:1px solid #e4e6dc;width:40%;font-size:13px">${escapeHtml(field.label)}</th><td style="padding:12px 8px;border-bottom:1px solid #e4e6dc;white-space:pre-wrap;overflow-wrap:anywhere;font-size:14px">${escapeHtml(values[field.name] || 'Not provided')}</td></tr>`).join('')}</table>`).join('')}<p style="color:#6c756e;font-size:12px;margin-top:24px">Submitted from /book-editing-questionnarie</p></div></div>`;
  try {
    const transporter = createQuestionnaireTransport();
    const result = await transporter.sendMail({
      from: `"Pine Book Writing" <${questionnaireSender}>`,
      to: questionnaireRecipient,
      replyTo: values.contactEmail,
      subject: `Book Editing Questionnaire - ${values.authorName.replace(/[\r\n]/g, ' ')} - ${values.bookTitle.replace(/[\r\n]/g, ' ')}`,
      text, html,
    });
    if (!result.accepted?.length) throw new Error('SMTP did not accept the recipient');
    return res.status(200).json({ success: true, message: 'Your questionnaire has been sent to our team.' });
  } catch (error) {
    console.error('Book editing questionnaire email failed:', error.code || 'SMTP_ERROR');
    return res.status(500).json({ success: false, message: 'We could not send your questionnaire. Your answers are still here. Please try again.' });
  }
}
