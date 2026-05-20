import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface AccessRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  jobTitle?: string;
  interests: string[];
  message?: string;
}

function buildEmailHtml(data: AccessRequestBody): string {
  const STRIP = ['#8DC63F','#EC008C','#F7941D','#003087','#00AEEF','#BCBEC0','#7B2D8B'];
  const stripHtml = STRIP.map(c => `<td style="background:${c};height:4px;padding:0"></td>`).join('');

  const interestList = data.interests.length
    ? data.interests.map(i => `<li style="margin:4px 0;color:#414042">${i}</li>`).join('')
    : '<li style="color:#BCBEC0">None selected</li>';

  const row = (label: string, value?: string) =>
    value
      ? `<tr>
           <td style="padding:8px 0;color:#BCBEC0;font-size:12px;font-weight:600;text-transform:uppercase;
                      letter-spacing:0.08em;width:160px;vertical-align:top">${label}</td>
           <td style="padding:8px 0;color:#414042;font-size:14px;vertical-align:top">${value}</td>
         </tr>`
      : '';

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F5F7FA;font-family:Montserrat,Segoe UI,Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F7FA;padding:40px 20px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

        <!-- Header gradient -->
        <tr><td style="background:linear-gradient(135deg,#003087 0%,#00AEEF 60%,#8DC63F 100%);
                        border-radius:16px 16px 0 0;padding:36px 40px">
          <p style="margin:0 0 6px;color:#8DC63F;font-size:11px;font-weight:700;
                    text-transform:uppercase;letter-spacing:0.12em">Covenir Portal</p>
          <h1 style="margin:0;color:#fff;font-size:24px;font-weight:800;line-height:1.2">
            New Access Request
          </h1>
          <p style="margin:8px 0 0;color:rgba(255,255,255,0.7);font-size:14px">
            Submitted via covenirportal.com
          </p>
        </td></tr>

        <!-- Color strip -->
        <tr><td style="padding:0"><table width="100%" cellpadding="0" cellspacing="0">
          <tr>${stripHtml}</tr>
        </table></td></tr>

        <!-- Body -->
        <tr><td style="background:#fff;padding:36px 40px">

          <h2 style="margin:0 0 20px;font-size:16px;font-weight:700;color:#003087">
            Contact Information
          </h2>
          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
            ${row('Full Name',  `${data.firstName} ${data.lastName}`)}
            ${row('Email',      `<a href="mailto:${data.email}" style="color:#003087">${data.email}</a>`)}
            ${row('Phone',      data.phone)}
            ${row('Company',    data.company)}
            ${row('Job Title',  data.jobTitle)}
          </table>

          <div style="border-top:1px solid #F5F7FA;margin:28px 0"></div>

          <h2 style="margin:0 0 16px;font-size:16px;font-weight:700;color:#003087">
            Areas of Interest
          </h2>
          <ul style="margin:0;padding-left:20px;line-height:1.8">${interestList}</ul>

          ${data.message ? `
          <div style="border-top:1px solid #F5F7FA;margin:28px 0"></div>
          <h2 style="margin:0 0 12px;font-size:16px;font-weight:700;color:#003087">Additional Notes</h2>
          <p style="margin:0;color:#414042;font-size:14px;line-height:1.7;
                    background:#F5F7FA;border-radius:10px;padding:16px">${data.message}</p>
          ` : ''}

        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#001A4D;border-radius:0 0 16px 16px;padding:24px 40px">
          <p style="margin:0;color:rgba(255,255,255,0.4);font-size:12px;text-align:center">
            This request was submitted through the
            <a href="https://covenirportal.vercel.app" style="color:#00AEEF;text-decoration:none">Covenir Portal</a>.
            Reply directly to this email to respond to the requester.
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(req: Request) {
  try {
    const body: AccessRequestBody = await req.json();

    // Basic validation
    if (!body.firstName || !body.lastName || !body.email || !body.company) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Covenir Portal <portal@covenirportal.com>',
      to:   ['info@covenirbpo.com'],
      replyTo: body.email,
      subject: `Portal Access Request — ${body.firstName} ${body.lastName} · ${body.company}`,
      html: buildEmailHtml(body),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Request access error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
