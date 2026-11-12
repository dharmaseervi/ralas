import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function esc(str: string): string {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
}

const serviceLabels: Record<string, string> = {
    'hearing-test': 'Hearing Test',
    'speech-therapy': 'Speech Therapy',
    'hearing-aid-fitting': 'Hearing Aid Fitting',
    'tinnitus-treatment': 'Tinnitus Treatment',
    'language-therapy': 'Language Therapy',
    'consultation': 'Initial Consultation',
}

export async function POST(request: NextRequest) {
    try {
        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json({ message: 'Missing email API key' }, { status: 500 });
        }

        const { firstName, lastName, email, phone, service, date, time, notes, _honeypot } = await request.json();

        if (_honeypot) {
            return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
        }

        if (!firstName || !lastName || !email || !phone || !service || !date || !time) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        const fullName = esc(`${firstName} ${lastName}`)
        const safeEmail = esc(email)
        const safePhone = esc(phone)
        const serviceLabel = esc(serviceLabels[service] ?? service)
        const safeNotes = notes ? esc(notes) : ''
        const formattedDate = new Date(date).toLocaleDateString('en-IN', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        })
        const year = new Date().getFullYear()

        const from = process.env.RESEND_FROM_EMAIL || 'Ralas Hearing Clinic <onboarding@resend.dev>'
        const { error } = await resend.emails.send({
            from,
            to: ['sinchanaravi0201@gmail.com', 'dharmaseervijb18239@gmail.com'],
            subject: `New appointment: ${fullName} — ${serviceLabel} on ${formattedDate}`,
            html: `
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    @media only screen and (max-width:600px) {
      .wrap { padding: 12px 8px !important; }
      .card-header { padding: 20px 16px !important; }
      .card-body { padding: 20px 16px !important; }
      .card-footer { padding: 16px !important; }
      .h1 { font-size: 18px !important; }
      .appt-strip { padding: 12px 14px !important; }
      .appt-service { font-size: 16px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#FAF7F2;font-family:Arial,sans-serif;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td class="wrap" align="center" style="padding:24px 12px;">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:580px;margin:0 auto;">

          <!-- Header -->
          <tr>
            <td class="card-header" style="background:#1A3A2A;padding:24px 28px;border-radius:4px 4px 0 0;">
              <div style="color:#C9A84C;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;margin-bottom:6px;">Ralas Hearing Clinic</div>
              <div class="h1" style="color:white;font-size:22px;font-weight:300;">New appointment booking</div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td class="card-body" style="background:white;padding:24px 28px;border:0.5px solid rgba(26,58,42,0.12);border-top:none;">

              <!-- Appointment highlight strip -->
              <div class="appt-strip" style="background:#FAF7F2;border-left:3px solid #C9A84C;padding:14px 18px;margin-bottom:24px;">
                <div style="font-size:11px;color:#8C9B8E;text-transform:uppercase;letter-spacing:0.15em;margin-bottom:6px;">Appointment</div>
                <div class="appt-service" style="font-size:18px;color:#1A3A2A;font-weight:500;margin-bottom:4px;">${serviceLabel}</div>
                <div style="font-size:13px;color:#3D4F42;">${formattedDate}<br>${esc(time)}</div>
              </div>

              <!-- Patient details -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:10px 0;border-bottom:0.5px solid #F0EDE8;">
                    <span style="font-size:11px;color:#8C9B8E;text-transform:uppercase;letter-spacing:0.15em;">Patient</span><br>
                    <span style="font-size:15px;color:#1A3A2A;font-weight:500;">${fullName}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:0.5px solid #F0EDE8;">
                    <span style="font-size:11px;color:#8C9B8E;text-transform:uppercase;letter-spacing:0.15em;">Phone</span><br>
                    <a href="tel:${safePhone}" style="font-size:15px;color:#1A3A2A;font-weight:500;text-decoration:none;">${safePhone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;${safeNotes ? 'border-bottom:0.5px solid #F0EDE8;' : ''}">
                    <span style="font-size:11px;color:#8C9B8E;text-transform:uppercase;letter-spacing:0.15em;">Email</span><br>
                    <a href="mailto:${safeEmail}" style="font-size:15px;color:#1A3A2A;text-decoration:none;">${safeEmail}</a>
                  </td>
                </tr>
                ${safeNotes ? `
                <tr>
                  <td style="padding:10px 0;">
                    <span style="font-size:11px;color:#8C9B8E;text-transform:uppercase;letter-spacing:0.15em;">Notes</span><br>
                    <span style="font-size:14px;color:#3D4F42;line-height:1.5;">${safeNotes}</span>
                  </td>
                </tr>` : ''}
              </table>

              <!-- CTA — stacked buttons, full width on mobile -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding-bottom:10px;">
                    <a href="tel:${safePhone}"
                       style="display:block;background:#1A3A2A;color:white;padding:14px 24px;
                              text-align:center;text-decoration:none;font-size:12px;
                              letter-spacing:0.15em;text-transform:uppercase;font-weight:500;">
                      Call Patient
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="mailto:${safeEmail}"
                       style="display:block;background:#C9A84C;color:#1A3A2A;padding:14px 24px;
                              text-align:center;text-decoration:none;font-size:12px;
                              letter-spacing:0.15em;text-transform:uppercase;font-weight:500;">
                      Reply by Email
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="card-footer" style="background:#1A3A2A;padding:18px 28px;border-radius:0 0 4px 4px;text-align:center;">
              <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.4);line-height:1.8;">
                © ${year} Ralas Hearing Clinic<br>
                2nd Floor, 121, 6th C Main Road, Jayanagar, Bengaluru – 560011<br>
                <a href="https://ralasclinic.com" style="color:#C9A84C;text-decoration:none;">ralasclinic.com</a>
                &nbsp;·&nbsp;
                <a href="tel:+916366638452" style="color:#C9A84C;text-decoration:none;">+91 6366-638452</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
        }

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
