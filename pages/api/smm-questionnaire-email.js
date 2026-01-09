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
    if (req.method !== "POST") return res.status(405).json({ success: false, message: "Method not allowed" });

    const {
        authorName,
        bookName,
        penName,
        genres,
        email,
        number,
        website,
        timeZone,

        idealReaderAge,
        idealReaderInterests,
        idealReaderLocation,
        idealReaderFavoriteAuthors,

        notableAreas,
        briefDescription,
        paidAdvertisement,

        WritingStage,
        primaryGoal,
        socialMedia,
        targeting,
        assets,
        brandTone,
        expectations,
        activities,
        gender,

        bookBranding,
        regionToMarket,
        ageRange,
        marketingServices,
        mediaAccounts,
        information,
        message,

        referringPage,
        currentPage,
        userIP,
        userCity,
        userRegion,
        userCountry,
    } = req.body || {};

    if (!email || !authorName || !bookName) {
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

        // Admin email
        const adminHtmlContent = `
      <div style="font-family: Arial, sans-serif; background-color:#f8f9fa; padding: 20px;">
        <div style="max-width:700px; margin:0 auto; background:#ffffff; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1);">
          <div style="background:#0d0f38; color:#ffffff; padding:16px 24px; border-radius:8px 8px 0 0;">
            <h2 style="margin:0;">📩 New SMM Questionnaire - ${escapeHtml(authorName)}</h2>
            <p style="margin:8px 0 0 0; font-size:14px; opacity:0.9;">SMM Page Submission</p>
          </div>

          <div style="padding:24px; color:#333333;">
            <table style="width:100%; border-collapse:collapse; font-size:14px;">
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Author Name</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(authorName)}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Book Name</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(bookName)}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Pen Name</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(penName || "N/A")}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Genres</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(genres || "N/A")}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Email</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">
                  <a href="mailto:${escapeHtml(email)}" style="color:#0d6efd; text-decoration:none;">${escapeHtml(email)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Phone</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(number || "N/A")}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Website</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(website || "N/A")}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Time Zone</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(timeZone || "N/A")}</td>
              </tr>

              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Writing Stage</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(listOrNA(WritingStage))}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Primary Goal</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(listOrNA(primaryGoal))}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Platforms</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(listOrNA(socialMedia))}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Targeting</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(listOrNA(targeting))}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Assets</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(listOrNA(assets))}</td>
              </tr>

              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Ideal Reader</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">
                  Age: ${escapeHtml(idealReaderAge || "N/A")}<br/>
                  Interests: ${escapeHtml(idealReaderInterests || "N/A")}<br/>
                  Location: ${escapeHtml(idealReaderLocation || "N/A")}<br/>
                  Favorite Authors: ${escapeHtml(idealReaderFavoriteAuthors || "N/A")}
                </td>
              </tr>

              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Notable Struggles</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(notableAreas || "N/A")}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Book Description</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(briefDescription || "N/A")}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Ad Budget</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(paidAdvertisement || "N/A")}</td>
              </tr>

              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Brand Tone</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(listOrNA(brandTone))}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Brand Colors</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(bookBranding || "N/A")}</td>
              </tr>

              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Next 3 Months Goals</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(listOrNA(expectations))}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Future Activities</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(listOrNA(activities))}</td>
              </tr>

              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Region to Market</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(regionToMarket || "N/A")}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Reader Age Range</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(ageRange || "N/A")}</td>
              </tr>

              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Reader Gender</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(listOrNA(gender))}</td>
              </tr>

              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Past Agencies + Results</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(marketingServices || "N/A")}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Existing Social Accounts</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(mediaAccounts || "N/A")}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Additional Info</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(information || "N/A")}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Message</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(message || "N/A")}</td>
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
                <strong>📢 SMM Lead:</strong> This questionnaire was submitted from the SMM page.
              </p>
            </div>
          </div>

          <div style="background:#f1f3f5; color:#555; padding:12px 24px; border-top:1px solid #e9ecef; border-radius:0 0 8px 8px; font-size:13px;">
            <p style="margin:0;">📬 Automatically generated from Pine Book Writing SMM questionnaire form.</p>
          </div>
        </div>
      </div>
    `;

        // User thank you email
        const userHtmlContent = `
      <div style="font-family: Arial, sans-serif; background-color:#f8f9fa; padding: 20px;">
        <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1);">
          <div style="background:linear-gradient(135deg, #0d0f38 0%, #1a1d5e 100%); color:#ffffff; padding:32px 24px; border-radius:8px 8px 0 0; text-align:center;">
            <h1 style="margin:0 0 8px 0; font-size:30px;">Thank You, ${escapeHtml(authorName)}! 📚</h1>
            <p style="margin:0; font-size:16px; opacity:0.9;">We’ve received your SMM questionnaire.</p>
          </div>

          <div style="padding:28px 24px; color:#333333;">
            <p style="font-size:16px; line-height:1.6; margin-bottom:14px;">
              Thanks for sharing the details. Our team will review your responses and reach out to schedule a quick call.
            </p>

            <div style="background:#f8f9fa; padding:18px; border-radius:8px; border-left:4px solid #0d0f38; margin:18px 0;">
              <p style="margin:0 0 12px 0; font-weight:600; color:#0d0f38; font-size:16px;">📋 Your Details</p>
              <table style="width:100%; font-size:14px; line-height:1.6;">
                <tr>
                  <td style="padding:6px 0; color:#666; width:110px;">Name:</td>
                  <td style="padding:6px 0; font-weight:600;">${escapeHtml(authorName)}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0; color:#666;">Email:</td>
                  <td style="padding:6px 0;">${escapeHtml(email)}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0; color:#666;">Phone:</td>
                  <td style="padding:6px 0;">${escapeHtml(number || "N/A")}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0; color:#666;">Book:</td>
                  <td style="padding:6px 0;">${escapeHtml(bookName)}</td>
                </tr>
              </table>
            </div>

            <p style="font-size:16px; line-height:1.6; margin-bottom:10px;"><strong>Best regards,</strong></p>
            <p style="font-size:16px; line-height:1.6; margin:0;"><strong>Pine Book Writing Team</strong></p>
          </div>
        </div>
      </div>
    `;

        // Send admin
        const adminInfo = await transporter.sendMail({
            from: `"Pine Book Writing" <pinebookwriting@gmail.com>`,
            to: "pinebookwriting@gmail.com",
            subject: `SMM Questionnaire - ${authorName || "User"}`,
            html: adminHtmlContent,
        });

        // Send user
        const userMailInfo = await transporter.sendMail({
            from: `"Pine Book Writing" <pinebookwriting@gmail.com>`,
            to: email,
            subject: `We received your SMM Questionnaire`,
            html: userHtmlContent,
        });

        return res.status(200).json({
            success: true,
            message: "SMM questionnaire emails sent successfully",
            adminMessageId: adminInfo.messageId,
            userMessageId: userMailInfo.messageId,
        });
    } catch (error) {
        console.error("❌ Error sending SMM questionnaire email:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to send email",
            error: error.message,
        });
    }
}
