import nodemailer from "nodemailer";

const escapeHtml = (unsafe = "") =>
  String(unsafe)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const listOrNA = (arr) => (Array.isArray(arr) && arr.length ? arr.join(", ") : "N/A");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const {
    authorName,
    contactEmail,
    bookName,
    bookDescription,
    aboutAuthor,
    isbn,
    genre,
    bookSize,
    customBookSize,
    coverFinish,
    coverIdea,
    colorScheme,
    coverStyle,
    coverImages,
    authorPhoto,
    referringPage,
    currentPage,
  } = req.body || {};

  if (!authorName || !contactEmail || !bookName || !bookDescription || !bookSize || !coverFinish) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "pinebookwriting@gmail.com",
        pass: "owwwkmrznsnddjtm",
      },
    });

    const coverIdeaMap = {
      cover1: "https://www.pinebookwriting.com/brand-img/cover-detail/1.png",
      cover2: "https://www.pinebookwriting.com/brand-img/cover-detail/2.jpg",
      cover3: "https://www.pinebookwriting.com/brand-img/cover-detail/3.png",
      cover4: "https://www.pinebookwriting.com/brand-img/cover-detail/4.jpg",
      cover5: "https://www.pinebookwriting.com/brand-img/cover-detail/5.jpg",
      cover6: "https://www.pinebookwriting.com/brand-img/cover-detail/6.png",
      cover7: "https://www.pinebookwriting.com/brand-img/cover-detail/7.png",
      cover8: "https://www.pinebookwriting.com/brand-img/cover-detail/8.png",
      cover9: "https://www.pinebookwriting.com/brand-img/cover-detail/9.png",
      cover10: "https://www.pinebookwriting.com/brand-img/cover-detail/10.png",
    };

    const selectedCoverIdeaUrl = coverIdeaMap[coverIdea] || "";

    const coverImageNames = Array.isArray(coverImages)
      ? coverImages.map((f) => f?.filename).filter(Boolean)
      : [];
    const authorPhotoName = authorPhoto?.filename || "";
    const coverImagesPreviewHtml = Array.isArray(coverImages)
      ? coverImages
          .map((file, idx) =>
            file?.filename
              ? `<div style="display:inline-block; margin:6px;">
                   <img src="cid:cover-image-${idx + 1}" alt="${escapeHtml(file.filename)}" style="max-width:140px; max-height:180px; border:1px solid #ddd; border-radius:6px;" />
                 </div>`
              : ""
          )
          .join("")
      : "";

    const adminHtmlContent = `
      <div style="font-family: Arial, sans-serif; background-color:#f8f9fa; padding:20px;">
        <div style="max-width:700px; margin:0 auto; background:#fff; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1);">
          <div style="background:#0d0f38; color:#fff; padding:16px 24px; border-radius:8px 8px 0 0;">
            <h2 style="margin:0;">New Cover Detail Submission - ${escapeHtml(authorName)}</h2>
            <p style="margin:8px 0 0 0; font-size:14px; opacity:0.9;">Book Cover Detail Page Submission</p>
          </div>
          <div style="padding:24px; color:#333;">
            <table style="width:100%; border-collapse:collapse; font-size:14px;">
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Author Name</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(authorName)}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Contact Email</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(contactEmail)}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Book Name</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(bookName)}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Book Description</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(bookDescription)}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">About Author</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(aboutAuthor || "N/A")}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">ISBN</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(isbn || "N/A")}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Genre</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(genre || "N/A")}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Book Dimensions</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">
                  ${escapeHtml(bookSize === "custom" ? `Custom - ${customBookSize || "N/A"}` : bookSize)}
                </td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Cover Finish</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(coverFinish)}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Cover Idea</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(coverIdea || "N/A")}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Color Scheme</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(colorScheme || "N/A")}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Cover Style</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(coverStyle || "N/A")}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Cover Images</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(listOrNA(coverImageNames))}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Author Photo</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(authorPhotoName || "N/A")}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Author Photo Preview</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">
                  ${authorPhotoName ? `<img src="cid:author-photo" alt="Author Photo" style="max-width:180px; border:1px solid #ddd; border-radius:6px;" />` : "N/A"}
                </td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Selected Cover Idea Preview</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">
                  ${selectedCoverIdeaUrl
                    ? `<img src="${escapeHtml(selectedCoverIdeaUrl)}" alt="Selected Cover Idea" style="max-width:220px; border-radius:6px; border:1px solid #ddd;" />`
                    : "N/A"}
                </td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Uploaded Cover Images Preview</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">
                  ${coverImagesPreviewHtml || "N/A"}
                </td>
              </tr>
              ${referringPage ? `
                <tr style="background:#f8f9fa;">
                  <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Referrer</td>
                  <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(referringPage)}</td>
                </tr>
              ` : ""}
              ${currentPage ? `
                <tr>
                  <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Current Page</td>
                  <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(currentPage)}</td>
                </tr>
              ` : ""}
            </table>
          </div>
        </div>
      </div>
    `;

    const attachments = [];

    if (Array.isArray(coverImages)) {
      coverImages.forEach((file, idx) => {
        if (!file?.filename || !file?.contentBase64) return;
        attachments.push({
          filename: file.filename,
          content: Buffer.from(file.contentBase64, "base64"),
          contentType: file.contentType || "application/octet-stream",
          cid: `cover-image-${idx + 1}`,
        });
      });
    }

    if (authorPhoto?.filename && authorPhoto?.contentBase64) {
      attachments.push({
        filename: authorPhoto.filename,
        content: Buffer.from(authorPhoto.contentBase64, "base64"),
        contentType: authorPhoto.contentType || "application/octet-stream",
        cid: "author-photo",
      });
    }

    await transporter.sendMail({
      from: `"Pine Book Writing" <pinebookwriting@gmail.com>`,
      to: "pinebookwriting@gmail.com",
      subject: `Cover Detail Form - ${authorName || "User"}`,
      html: adminHtmlContent,
      attachments,
    });

    return res.status(200).json({
      success: true,
      message: "Cover detail email sent successfully",
    });
  } catch (error) {
    console.error("Error sending cover detail email:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.message,
    });
  }
}
