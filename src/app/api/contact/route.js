export const runtime = "nodejs";

import nodemailer from "nodemailer";
import path from "node:path";

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function escapeHtml(input = "") {
  return String(input)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = String(process.env.SMTP_SECURE || "true") === "true";

  if (!host || !user || !pass) {
    throw new Error("SMTP configuration is missing. Set SMTP_HOST, SMTP_USER, SMTP_PASS.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

const LOGO_CID = "lytechx-logo";
const LOGO_PATH = path.join(process.cwd(), "public", "images", "logo-e1590145859117.png");

function buildAdminTemplate({ name, email, phone, message }) {
  return `
  <div style="margin:0;padding:0;background:#e9edf4;font-family:Inter,Segoe UI,Arial,sans-serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="padding:20px 10px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="620" style="max-width:620px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #d8deea;box-shadow:0 12px 28px rgba(15,23,42,0.08);">
            <tr>
              <td style="background:linear-gradient(135deg,#0d1736,#0a214f);padding:24px 28px;color:#fff;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td align="left" style="vertical-align:top;width:50%;">
                      <img src="cid:${LOGO_CID}" alt="Lytechx Digital" width="170" style="display:block;height:auto;max-width:170px;" />
                    </td>
                    <td align="right" style="vertical-align:top;width:50%;">
                      <div style="font-size:20px;line-height:1.25;font-weight:800;letter-spacing:-0.01em;">
                        New Lead Received
                      </div>
                      <div style="margin-top:10px;display:inline-block;padding:6px 10px;border-radius:999px;background:#1c2f57;color:#9fb5de;font-size:12px;font-weight:600;">
                        <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#22c55e;margin-right:8px;vertical-align:middle;"></span>Inbound Website Enquiry
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:24px;background:#ffffff;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td width="50%" style="padding-right:10px;vertical-align:top;">
                      <div style="border-radius:12px;background:#f1f5fb;padding:14px 16px;">
                        <div style="font-size:12px;font-weight:800;letter-spacing:0.08em;color:#5d6f8d;text-transform:uppercase;">Full Name</div>
                        <div style="margin-top:8px;font-size:14px;line-height:1.35;font-weight:700;color:#0f172a;">${escapeHtml(name)}</div>
                      </div>
                    </td>
                    <td width="50%" style="padding-left:10px;vertical-align:top;">
                      <div style="border-radius:12px;background:#f1f5fb;padding:14px 16px;">
                        <div style="font-size:12px;font-weight:800;letter-spacing:0.08em;color:#5d6f8d;text-transform:uppercase;">Phone Number</div>
                        <div style="margin-top:8px;font-size:14px;line-height:1.35;font-weight:700;color:#0f172a;">${escapeHtml(phone)}</div>
                      </div>
                    </td>
                  </tr>
                </table>

                <div style="margin-top:12px;border-radius:12px;background:#f1f5fb;padding:14px 16px;">
                  <div style="font-size:12px;font-weight:800;letter-spacing:0.08em;color:#5d6f8d;text-transform:uppercase;">Email Address</div>
                  <div style="margin-top:8px;font-size:14px;line-height:1.35;font-weight:700;color:#0f4ea3;">${escapeHtml(email)}</div>
                </div>

                <div style="margin-top:16px;font-size:12px;font-weight:800;letter-spacing:0.08em;color:#5d6f8d;text-transform:uppercase;">Message Brief</div>
                <div style="margin-top:8px;border-radius:12px;border:1px solid #dbe5f2;background:#f8fbff;padding:14px;color:#334155;font-size:13px;line-height:1.65;font-weight:500;">
                  ${escapeHtml(message).replaceAll("\n", "<br/>")}
                </div>
              </td>
            </tr>
            <tr>
              <td style="border-top:1px solid #e7edf7;background:#f8fafc;padding:14px 16px;text-align:center;color:#6b7a93;font-size:11px;line-height:1.4;">
                &copy; 2026 Lytechx Digital. This is an automated notification.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>`;
}

function buildUserTemplate({ name }) {
  return `
  <div style="margin:0;padding:0;background:#eef3fb;font-family:Inter,Arial,sans-serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="680" style="max-width:680px;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #dbe5f2;box-shadow:0 16px 40px rgba(15,23,42,0.08);">
            <tr>
              <td style="background:linear-gradient(105deg,#1f73b7,#e45767);padding:18px 24px;color:#fff;">
                <img src="cid:${LOGO_CID}" alt="Lytechx" width="150" style="display:block;height:auto;max-width:150px;" />
              </td>
            </tr>
            <tr>
              <td style="padding:28px;">
                <h2 style="margin:0 0 12px;color:#0f172a;">Hi ${escapeHtml(name)},</h2>
                <p style="margin:0;color:#334155;line-height:1.7;">
                  Thank you for contacting Lytechx. We received your message and our team will get back to you shortly.
                </p>
                <p style="margin:16px 0 0;color:#334155;line-height:1.7;">
                  We appreciate your interest in our MT4/MT5 copy trading, indicator, and EA services.
                </p>
                <div style="margin:22px 0 0;padding:14px 16px;border:1px solid #dbe5f2;border-radius:10px;background:#f8fbff;color:#1e293b;font-size:14px;line-height:1.6;">
                  Our team usually replies within a few business hours.
                </div>
                <p style="margin:20px 0 0;color:#64748b;font-size:12px;">
                  This is an automated confirmation email.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>`;
}

export async function POST(req) {
  try {
    const body = await req.json();

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const phone = String(body?.phone || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !email || !phone || !message) {
      return json(
        { ok: false, message: "name, email, phone, and message are required." },
        400
      );
    }

    const inbox = process.env.CONTACT_INBOX || "sonusaini81075@gmail.com";
    if (!inbox) {
      return json(
        { ok: false, message: "CONTACT_INBOX or SMTP_USER must be configured." },
        500
      );
    }

    const transporter = getTransport();
    await transporter.verify();

    await transporter.sendMail({
      from: `"Lytechx Website" <${process.env.SMTP_USER}>`,
      to: inbox,
      replyTo: email,
      subject: `New Lead from ${name}`,
      html: buildAdminTemplate({ name, email, phone, message }),
      attachments: [
        {
          filename: "lytechx-logo.png",
          path: LOGO_PATH,
          cid: LOGO_CID,
        },
      ],
    });

    // Optional confirmation email to user
    await transporter.sendMail({
      from: `"Lytechx" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your enquiry - Lytechx",
      html: buildUserTemplate({ name }),
      attachments: [
        {
          filename: "lytechx-logo.png",
          path: LOGO_PATH,
          cid: LOGO_CID,
        },
      ],
    });

    return json({ ok: true, message: "Email sent successfully." }, 200);
  } catch (error) {
    return json(
      {
        ok: false,
        message: "Failed to send email.",
        error: error?.message || "Unknown error",
      },
      500
    );
  }
}
