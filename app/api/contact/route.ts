import { NextResponse } from "next/server";
import DOMPurify from "isomorphic-dompurify";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, website } = body; // 'website' is our honeypot

    // 1. Honeypot Check (If a bot fills this hidden field, silently reject)
    if (website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 2. Server-Side Validation (Never trust the client)
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // 3. Sanitization (Strips out <script> tags, prevents XSS)
    const cleanName = DOMPurify.sanitize(name);
    const cleanEmail = DOMPurify.sanitize(email);
    const cleanMessage = DOMPurify.sanitize(message);

    // 4. Send to Brevo API
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    
    if (!BREVO_API_KEY) {
      console.error("BREVO_API_KEY is missing from environment variables.");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Portfolio Contact Form", email: "no-reply@yourdomain.com" }, // Change this
        to: [{ email: "tendo.angella9@gmail.com", name: "Angella Tendo" }],
        subject: `New Portfolio Message from ${cleanName}`,
        htmlContent: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${cleanName}</p>
          <p><strong>Email:</strong> ${cleanEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${cleanMessage}</p>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send email via Brevo");
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}