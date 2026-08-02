import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, service, companyName, message } = body;

    // Server-side validation
    if (!fullName || !email || !service || !message) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Log the message received
    console.log("Enquiry received from contact form:", {
      fullName,
      email,
      service,
      companyName,
      message,
      timestamp: new Date().toISOString(),
    });

    // NOTE: To wire up Resend for production:
    // 1. Install resend: npm install resend
    // 2. Add RESEND_API_KEY to your environment variables
    // 3. Uncomment and adapt the code below:
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'True Life Global Website <onboarding@resend.dev>',
      to: 'info@truelifeglobal.com', // client email address
      subject: `New Web Enquiry: ${service}`,
      html: `
        <h3>New Enquiry Details</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Company:</strong> ${companyName || 'N/A'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    */

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error in contact form API route:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
