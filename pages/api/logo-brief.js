import nodemailer from "nodemailer";
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

const escapeHtml = (unsafe = "") =>
    String(unsafe)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

const listOrNA = (arr) => (Array.isArray(arr) && arr.length ? arr.join(", ") : "N/A");
const safeFilename = (value = "logo-brief") =>
    String(value)
        .toLowerCase()
        .replace(/[^a-z0-9-_]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "") || "logo-brief";

const loadLogoBuffer = () => {
    const logoPath = path.join(process.cwd(), "public", "brand-img", "logo.png");
    if (!fs.existsSync(logoPath)) return null;
    return fs.readFileSync(logoPath);
};

const buildPdfBuffer = (data) =>
    new Promise((resolve, reject) => {
        try {
            const doc = new PDFDocument({ margin: 50 });
            const chunks = [];
            const logoBuffer = loadLogoBuffer();
            const pageWidth = doc.page.width;
            const pageHeight = doc.page.height;
            const margin = 50;
            const labelWidth = 170;
            const rowGap = 6;
            let rowIndex = 0;

            doc.on("data", (chunk) => chunks.push(chunk));
            doc.on("end", () => resolve(Buffer.concat(chunks)));
            doc.on("error", reject);

            const drawHeader = () => {
                doc.save();
                doc.rect(0, 0, pageWidth, 90).fill("#0d0f38");
                doc.fillColor("#ffffff");
                if (logoBuffer) {
                    doc.image(logoBuffer, margin, 20, { fit: [140, 50], align: "left" });
                } else {
                    doc.fontSize(18).text("Pine Book Writing", margin, 28, { continued: false });
                }
                doc.fontSize(20).text("Logo Design Brief", margin + 170, 28);
                doc.fontSize(10).fillColor("#d6d9ff").text(
                    `Submitted: ${new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}`,
                    margin + 170,
                    55
                );
                doc.restore();
                doc.y = 110;
            };

            const ensurePageSpace = (height) => {
                if (doc.y + height > pageHeight - margin) {
                    doc.addPage();
                    drawHeader();
                }
            };

            const addSection = (title) => {
                ensurePageSpace(32);
                doc.fillColor("#0d0f38").fontSize(14).text(title);
                doc.moveDown(0.4);
            };

            const addRow = (label, value) => {
                const sanitizedValue = value || "N/A";
                const valueWidth = pageWidth - margin * 2 - labelWidth - 12;
                const valueHeight = doc.heightOfString(String(sanitizedValue), { width: valueWidth });
                const labelHeight = doc.heightOfString(String(label), { width: labelWidth });
                const rowHeight = Math.max(valueHeight, labelHeight) + rowGap;

                ensurePageSpace(rowHeight + 6);

                const rowTop = doc.y;
                doc.save();
                doc.rect(margin - 6, rowTop - 2, pageWidth - margin * 2 + 12, rowHeight + 4)
                    .fill(rowIndex % 2 === 0 ? "#f5f6fb" : "#ffffff");
                doc.restore();

                doc.fillColor("#1a1a1a").font("Helvetica-Bold").fontSize(11).text(label, margin, rowTop, {
                    width: labelWidth,
                });
                doc.fillColor("#333333").font("Helvetica").fontSize(11).text(String(sanitizedValue), margin + labelWidth + 12, rowTop, {
                    width: valueWidth,
                });
                doc.y = rowTop + rowHeight + 2;
                rowIndex += 1;
            };

            drawHeader();

            addSection("Client Details");
            addRow("Email", data.email);
            addRow("Exact Name for Logo", data.exactName);
            addRow("Company/Book Name", data.companyName);
            addRow("Industry/Genre", data.industry);
            addRow("Slogan/Tagline", data.slogan);

            addSection("Brand References");
            addRow("Logos They Like", data.likesLinks);
            addRow("Logos They Don't Like", data.dislikesLinks);
            addRow("Competitors", data.competitors);
            addRow("Website", data.website);

            addSection("Design Preferences");
            addRow("Logo Style", data.logoStyle);
            addRow("Look and Feel", data.lookAndFeel);
            addRow("Preferred Colors", listOrNA(data.colors));
            if (data.colorOther) addRow("Color Other", data.colorOther);
            addRow("Font Style", data.fontStyle);
            if (data.fontOther) addRow("Font Other", data.fontOther);

            addSection("Usage & Notes");
            addRow("Usage Context", listOrNA(data.usageContext));
            if (data.usageOther) addRow("Usage Other", data.usageOther);
            addRow("Social Media Sizes Needed", data.socialMediaSizes);
            addRow("Description", data.description);
            addRow("Additional Notes", data.additionalNotes);
            addRow("Send Copy to Client", data.sendCopy ? "Yes" : "No");

            addSection("Submission Metadata");
            if (data.userIP) addRow("IP Address", data.userIP);
            if (data.userCity || data.userRegion || data.userCountry) {
                addRow(
                    "Location",
                    [data.userCity, data.userRegion, data.userCountry].filter(Boolean).join(", ")
                );
            }
            if (data.referringPage) addRow("Referrer", data.referringPage);
            if (data.currentPage) addRow("Current Page", data.currentPage);

            doc.end();
        } catch (err) {
            reject(err);
        }
    });

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json({ success: false, message: "Method not allowed" });

    const {
        email,
        exactName,
        slogan,
        companyName,
        industry,
        likesLinks,
        dislikesLinks,
        competitors,
        description,
        website,
        socialMediaSizes,
        logoStyle,
        usageContext,
        usageOther,
        colors,
        colorOther,
        fontStyle,
        fontOther,
        lookAndFeel,
        additionalNotes,
        sendCopy,

        referringPage,
        currentPage,
        userIP,
        userCity,
        userRegion,
        userCountry,
    } = req.body || {};

    if (!email || !exactName || !companyName || !industry) {
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

        const pdfBuffer = await buildPdfBuffer({
            email,
            exactName,
            slogan,
            companyName,
            industry,
            likesLinks,
            dislikesLinks,
            competitors,
            description,
            website,
            socialMediaSizes,
            logoStyle,
            usageContext,
            usageOther,
            colors,
            colorOther,
            fontStyle,
            fontOther,
            lookAndFeel,
            additionalNotes,
            sendCopy,
            referringPage,
            currentPage,
            userIP,
            userCity,
            userRegion,
            userCountry,
        });

        const pdfFilename = `${safeFilename(exactName || companyName)}-logo-brief.pdf`;

        // Admin email
        const adminHtmlContent = `
      <div style="font-family: Arial, sans-serif; background-color:#f8f9fa; padding: 20px;">
        <div style="max-width:700px; margin:0 auto; background:#ffffff; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1);">
          <div style="background:#0d0f38; color:#ffffff; padding:16px 24px; border-radius:8px 8px 0 0;">
            <h2 style="margin:0;">🎨 New Logo Design Brief - ${escapeHtml(exactName)}</h2>
            <p style="margin:8px 0 0 0; font-size:14px; opacity:0.9;">Logo Brief Submission</p>
          </div>

          <div style="padding:24px; color:#333333;">
            <table style="width:100%; border-collapse:collapse; font-size:14px;">
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Email</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">
                  <a href="mailto:${escapeHtml(email)}" style="color:#0d6efd; text-decoration:none;">${escapeHtml(email)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Exact Name for Logo</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(exactName)}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Slogan/Tagline</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(slogan || "N/A")}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Company/Book Name</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(companyName)}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Industry/Genre</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(industry)}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Logos They Like</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef; word-break:break-word;">${escapeHtml(likesLinks || "N/A")}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Logos They Don't Like</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef; word-break:break-word;">${escapeHtml(dislikesLinks || "N/A")}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Competitors</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(competitors || "N/A")}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Description</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(description || "N/A")}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Website</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">
                  ${website ? `<a href="${escapeHtml(website)}" style="color:#0d6efd; text-decoration:none;">${escapeHtml(website)}</a>` : "N/A"}
                </td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Social Media Sizes Needed</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(socialMediaSizes || "N/A")}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Logo Style</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(logoStyle || "N/A")}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Usage Context</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">
                  ${escapeHtml(listOrNA(usageContext))}
                  ${usageOther ? `<br/>Other: ${escapeHtml(usageOther)}` : ""}
                </td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Preferred Colors</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">
                  ${escapeHtml(listOrNA(colors))}
                  ${colorOther ? `<br/>Other: ${escapeHtml(colorOther)}` : ""}
                </td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Font Style</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">
                  ${escapeHtml(fontStyle || "N/A")}
                  ${fontOther ? `<br/>Other: ${escapeHtml(fontOther)}` : ""}
                </td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Look and Feel</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(lookAndFeel || "N/A")}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Additional Notes</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(additionalNotes || "N/A")}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Send Copy to Client</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${sendCopy ? "Yes" : "No"}</td>
              </tr>

              ${userIP ? `
                <tr style="background:#f8f9fa;">
                  <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">IP Address</td>
                  <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(userIP)}</td>
                </tr>
              ` : ""}

              ${(userCity || userRegion || userCountry) ? `
                <tr>
                  <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Location</td>
                  <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">
                    ${escapeHtml([userCity, userRegion, userCountry].filter(Boolean).join(", ") || "N/A")}
                  </td>
                </tr>
              ` : ""}

              ${referringPage ? `
                <tr style="background:#f8f9fa;">
                  <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Referrer</td>
                  <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">
                    <a href="${escapeHtml(referringPage)}" style="color:#0d6efd; text-decoration:none; font-size:12px;">${escapeHtml(referringPage)}</a>
                  </td>
                </tr>
              ` : ""}

              ${currentPage ? `
                <tr>
                  <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Current Page</td>
                  <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">
                    <a href="${escapeHtml(currentPage)}" style="color:#0d6efd; text-decoration:none; font-size:12px;">${escapeHtml(currentPage)}</a>
                  </td>
                </tr>
              ` : ""}
            </table>

            <div style="margin-top:20px; padding:16px; background:#d1ecf1; border-left:4px solid #0dcaf0; border-radius:4px;">
              <p style="margin:0; color:#055160; font-size:14px;">
                <strong>🎨 Logo Brief Lead:</strong> This brief was submitted from the Logo Design Brief page.
              </p>
            </div>
          </div>

          <div style="background:#f1f3f5; color:#555; padding:12px 24px; border-top:1px solid #e9ecef; border-radius:0 0 8px 8px; font-size:13px;">
            <p style="margin:0;">📬 Automatically generated from Pine Book Writing Logo Design Brief form.</p>
          </div>
        </div>
      </div>
    `;

        // User thank you email
        const userHtmlContent = `
      <div style="font-family: Arial, sans-serif; background-color:#f8f9fa; padding: 20px;">
        <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1);">
          <div style="background:linear-gradient(135deg, #0d0f38 0%, #1a1d5e 100%); color:#ffffff; padding:32px 24px; border-radius:8px 8px 0 0; text-align:center;">
            <h1 style="margin:0 0 8px 0; font-size:30px;">Thank You! 🎨</h1>
            <p style="margin:0; font-size:16px; opacity:0.9;">We've received your logo design brief.</p>
          </div>

          <div style="padding:28px 24px; color:#333333;">
            <p style="font-size:16px; line-height:1.6; margin-bottom:14px;">
              Dear <strong>${escapeHtml(exactName)}</strong>,
            </p>
            
            <p style="font-size:16px; line-height:1.6; margin-bottom:14px;">
              Thank you for submitting your logo design brief! Our creative team is excited to bring your vision to life.
            </p>

            <div style="background:#f8f9fa; padding:18px; border-radius:8px; border-left:4px solid #0d0f38; margin:18px 0;">
              <p style="margin:0 0 12px 0; font-weight:600; color:#0d0f38; font-size:16px;">📋 Your Brief Summary</p>
              <table style="width:100%; font-size:14px; line-height:1.6;">
                <tr>
                  <td style="padding:6px 0; color:#666; width:130px;">Logo Name:</td>
                  <td style="padding:6px 0; font-weight:600;">${escapeHtml(exactName)}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0; color:#666;">Company/Book:</td>
                  <td style="padding:6px 0;">${escapeHtml(companyName)}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0; color:#666;">Industry:</td>
                  <td style="padding:6px 0;">${escapeHtml(industry)}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0; color:#666;">Email:</td>
                  <td style="padding:6px 0;">${escapeHtml(email)}</td>
                </tr>
                ${logoStyle ? `
                <tr>
                  <td style="padding:6px 0; color:#666;">Logo Style:</td>
                  <td style="padding:6px 0;">${escapeHtml(logoStyle)}</td>
                </tr>
                ` : ""}
                ${lookAndFeel ? `
                <tr>
                  <td style="padding:6px 0; color:#666;">Look & Feel:</td>
                  <td style="padding:6px 0;">${escapeHtml(lookAndFeel)}</td>
                </tr>
                ` : ""}
              </table>
            </div>

            <p style="font-size:16px; line-height:1.6; margin-bottom:14px;">
              <strong>Next Steps:</strong>
            </p>
            <ul style="font-size:15px; line-height:1.8; color:#555; margin-bottom:20px;">
              <li>Our team will review your brief within 24 hours</li>
              <li>We'll reach out to discuss any questions or clarifications</li>
              <li>You'll receive initial logo concepts within the agreed timeline</li>
            </ul>

            <p style="font-size:16px; line-height:1.6; margin-bottom:10px;"><strong>Best regards,</strong></p>
            <p style="font-size:16px; line-height:1.6; margin:0;"><strong>Pine Book Writing Design Team</strong></p>
          </div>
        </div>
      </div>
    `;

        // Send admin email
        const adminInfo = await transporter.sendMail({
            from: `"Pine Book Writing" <pinebookwriting@gmail.com>`,
            to: "pinebookwriting@gmail.com",
            subject: `Logo Design Brief - ${exactName || companyName}`,
            html: adminHtmlContent,
            attachments: [
                {
                    filename: pdfFilename,
                    content: pdfBuffer,
                    contentType: "application/pdf",
                },
            ],
        });

        // Send user email (if requested or always)
        let userMailInfo = null;
        if (sendCopy || true) { // Always send to user
            userMailInfo = await transporter.sendMail({
                from: `"Pine Book Writing" <pinebookwriting@gmail.com>`,
                to: email,
                subject: `We received your Logo Design Brief`,
                html: userHtmlContent,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Logo brief emails sent successfully",
            adminMessageId: adminInfo.messageId,
            userMessageId: userMailInfo?.messageId,
        });
    } catch (error) {
        console.error("❌ Error sending logo brief email:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to send email",
            error: error.message,
        });
    }
}
