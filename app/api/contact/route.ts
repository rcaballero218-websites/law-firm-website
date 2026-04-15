import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  caseType: string;
  message: string;
  website?: string; // honeypot
  startedAt?: number;
  turnstileToken?: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload;

    const {
      name,
      email,
      phone,
      caseType,
      message,
      website,
      startedAt,
      turnstileToken,
    } = body;

    // Honeypot: bots often fill hidden fields
    if (website && website.trim() !== "") {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Basic timing check: reject very fast submissions
    if (!startedAt || Date.now() - startedAt < 3000) {
      return NextResponse.json(
        { ok: false, error: "Submission blocked." },
        { status: 400 }
      );
    }

    if (!name || !email || !phone || !caseType || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!turnstileToken) {
      return NextResponse.json(
        { ok: false, error: "Security check missing." },
        { status: 400 }
      );
    }

    // Turnstile server-side validation
    const ip =
      req.headers.get("cf-connecting-ip") ||
      req.headers.get("x-forwarded-for") ||
      "";

    const formData = new FormData();
    formData.append("secret", process.env.TURNSTILE_SECRET_KEY || "");
    formData.append("response", turnstileToken);
    if (ip) formData.append("remoteip", ip);

    const turnstileRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
      }
    );

    const turnstileData = await turnstileRes.json();

    if (!turnstileData.success) {
      return NextResponse.json(
        { ok: false, error: "Security verification failed." },
        { status: 400 }
      );
    }

    const subject = `New consultation request: ${caseType}`;

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Type of Case: ${caseType}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const html = `
      <h2>New Consultation Request</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Type of Case:</strong> ${escapeHtml(caseType)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `;

    await resend.emails.send({
      from: "Website Contact <contact@luisleonlawyer.com>",
      to: ["info@luisleonlaw.com"],
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}