import { NextResponse } from 'next/server';

export interface AccessRequestBody {
  firstName: string;
  lastName:  string;
  email:     string;
  phone?:    string;
  company:   string;
  jobTitle?: string;
  interests: string[];
  message?:  string;
}

export async function POST(req: Request) {
  try {
    const body: AccessRequestBody = await req.json();

    // Basic validation
    if (!body.firstName || !body.lastName || !body.email || !body.company) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // TODO: wire up email delivery — options:
    //   • Nodemailer + Office 365 SMTP (smtp.office365.com:587)
    //   • Nodemailer + any SMTP relay
    //   • Resend / SendGrid / Postmark
    // For now this is a demo — log to console and return success.
    console.log('=== New Access Request ===');
    console.log(JSON.stringify(body, null, 2));

    // Simulate slight processing delay so the UI spinner is visible
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Request access error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
