import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json({ message: 'Missing email API key' }, { status: 500 });
        }

        const { name, email, phone, message } = await request.json();

        console.log('Contact form submission:', { name, email, phone, message });


        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // Send email to clinic
        const { error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['dharmaseervijb18239@gmail.com'],
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <html>
                <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Request - Ralas Hearing Aid Clinic</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f8fafc;">
    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td align="center" style="padding: 2rem 1rem;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <!-- Header -->
            <div style="background: #1e40af; padding: 1.5rem; border-radius: 0.5rem 0.5rem 0 0;">
              <h1 style="margin: 0; color: white; font-size: 1.5rem; font-family: Arial, sans-serif;">
                Ralas Hearing Aid Clinic
              </h1>
            </div>

            <!-- Content -->
            <div style="padding: 2rem; font-family: Arial, sans-serif; color: #1e293b;">
              <h2 style="margin-top: 0; font-size: 1.25rem; color: #1e40af;">
                New Contact Request
              </h2>

              <div style="margin-bottom: 1.5rem;">
                <p style="margin: 0.5rem 0;">
                  <strong style="display: inline-block; width: 80px;">Name:</strong>
                  ${name}
                </p>
                <p style="margin: 0.5rem 0;">
                  <strong style="display: inline-block; width: 80px;">Email:</strong>
                  <a href="mailto:${email}" style="color: #1e40af; text-decoration: none;">
                    ${email}
                  </a>
                </p>
                ${phone ? `
                <p style="margin: 0.5rem 0;">
                  <strong style="display: inline-block; width: 80px;">Phone:</strong>
                  <a href="tel:${phone}" style="color: #1e40af; text-decoration: none;">
                    ${phone}
                  </a>
                </p>
                ` : ''}
              </div>

              <div style="margin-bottom: 2rem;">
                <h3 style="font-size: 1rem; color: #1e40af; margin-bottom: 0.5rem;">
                  Message:
                </h3>
                <div style="background: #f1f5f9; padding: 1rem; border-radius: 0.375rem;">
                  <p style="margin: 0; white-space: pre-wrap; line-height: 1.5;">
                    ${message}
                  </p>
                </div>
              </div>

              <div style="text-align: center; margin-top: 2rem;">
                <a href="mailto:${email}" 
                   style="display: inline-block; background: #1e40af; color: white; 
                          padding: 0.75rem 1.5rem; border-radius: 0.375rem; 
                          text-decoration: none; font-weight: bold;">
                  Reply to Customer
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="padding: 1.5rem; background: #f1f5f9; border-radius: 0 0 0.5rem 0.5rem; 
                       border-top: 1px solid #e2e8f0; font-size: 0.875rem;">
              <div style="text-align: center; color: #64748b;">
                <p style="margin: 0.5rem 0;">
                  2nd floor, 121, 6th C Main Road,<br>
                  4th Block, Jayanagar, Bengaluru, Karnataka 560011
                </p>
                <div style="margin: 1rem 0;">
                  <a href="https://ralashearing.com" 
                     style="color: #1e40af; text-decoration: none; margin: 0 0.5rem;">
                    Website
                  </a>
                  <span style="color: #cbd5e1;">|</span>
                  <a href="tel:+916366638452" 
                     style="color: #1e40af; text-decoration: none; margin: 0 0.5rem;">
                    +91 6366-638452
                  </a>
                </div>
                <p style="margin: 0.5rem 0;">
                  Sent via website contact form
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>
            `,
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
