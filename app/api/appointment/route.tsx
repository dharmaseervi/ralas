import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json({ message: 'Missing email API key' }, { status: 500 });
        }

        const { firstName, lastName, email, phone, service, date, time, notes } = await request.json();

        console.log('Contact form submission:', { firstName, lastName, email, phone, service, date, time, notes });


        // Basic validation
        if (!firstName || !lastName || !email || !service || !date || !time) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // Send email to clinic
        const { error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['dharmaseervijb18239@gmail.com'],
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            html: `
           <!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Appointment Booking</title>
  <style type="text/css">
    /* Client-specific styles */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; }

    /* Reset styles */
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }

    /* iOS blue links */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }

    /* Gmail blue links */
    u + #body a {
      color: inherit;
      text-decoration: none;
      font-size: inherit;
      font-family: inherit;
      font-weight: inherit;
      line-height: inherit;
    }

    /* Samsung Mail blue links */
    #MessageViewBody a {
      color: inherit;
      text-decoration: none;
      font-size: inherit;
      font-family: inherit;
      font-weight: inherit;
      line-height: inherit;
    }

    /* Responsive styles */
    @media screen and (max-width: 600px) {
      .email-container {
        width: 100% !important;
        max-width: 100% !important;
      }
      .stack-column,
      .stack-column-center {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        direction: ltr !important;
      }
      .stack-column-center {
        text-align: center !important;
      }
      .center-on-narrow {
        text-align: center !important;
        display: block !important;
        margin-left: auto !important;
        margin-right: auto !important;
        float: none !important;
      }
      table.center-on-narrow {
        display: inline-block !important;
      }
      .email-container p {
        font-size: 16px !important;
        line-height: 24px !important;
      }
      .email-padding {
        padding-left: 20px !important;
        padding-right: 20px !important;
      }
      .mobile-padding-top {
        padding-top: 15px !important;
      }
      .mobile-padding-bottom {
        padding-bottom: 15px !important;
      }
      .mobile-padding {
        padding: 15px !important;
      }
      .mobile-font-16 {
        font-size: 16px !important;
      }
      .mobile-font-14 {
        font-size: 14px !important;
      }
      .mobile-full-width {
        width: 100% !important;
      }
      .mobile-button {
        width: 100% !important;
        display: block !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, Helvetica, sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
    New appointment booking details inside...
  </div>
  
  <div style="width: 100%; background-color: #f4f4f4;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="600" style="margin: auto; border-spacing: 0; font-family: Arial, sans-serif;" class="email-container">
      <!-- Email Header : BEGIN -->
      <tr>
        <td style="padding: 20px 0; text-align: center">
          <img src="https://www.ralas.co.in/ralas.png" width="200" height="50" alt="Your Clinic Logo" border="0" style="height: auto; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555;">
        </td>
      </tr>
      <!-- Email Header : END -->

      <!-- Email Body : BEGIN -->
      <tr>
        <td style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
          <!-- Header Section : BEGIN -->
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td style="padding: 30px 40px; background-color: #4f46e5; border-top-left-radius: 8px; border-top-right-radius: 8px; text-align: left;" class="email-padding">
                <h1 style="margin: 0; font-family: Arial, sans-serif; font-size: 24px; line-height: 30px; color: #ffffff; font-weight: bold;">New Appointment Booking</h1>
              </td>
            </tr>
          </table>
          <!-- Header Section : END -->

          <!-- Intro Section : BEGIN -->
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td style="padding: 30px 40px 20px 40px; text-align: left;" class="email-padding">
                <p style="margin: 0 0 15px 0; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; color: #333333;">
                  A new appointment has been booked. Here are the details:
                </p>
              </td>
            </tr>
          </table>
          <!-- Intro Section : END -->

          <!-- Patient Info Section : BEGIN -->
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td style="padding: 0 40px 20px 40px;" class="email-padding">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 6px;">
                  <tr>
                    <td style="padding: 20px;" class="mobile-padding">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td colspan="2" style="padding-bottom: 15px; font-family: Arial, sans-serif; font-size: 18px; line-height: 24px; color: #4f46e5; font-weight: bold;" class="mobile-font-16">
                            Patient Information
                          </td>
                        </tr>
                        <tr>
                          <td width="30%" style="padding: 5px 0; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px; color: #6b7280;" class="mobile-font-14">
                            Name:
                          </td>
                          <td style="padding: 5px 0; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px; color: #333333; font-weight: 500;" class="mobile-font-14">
                            ${firstName} ${lastName}
                          </td>
                        </tr>
                        <tr>
                          <td width="30%" style="padding: 5px 0; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px; color: #6b7280;" class="mobile-font-14">
                            Email:
                          </td>
                          <td style="padding: 5px 0; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px; color: #333333; font-weight: 500; word-break: break-word;" class="mobile-font-14">
                            ${email}
                          </td>
                        </tr>
                        <tr>
                          <td width="30%" style="padding: 5px 0; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px; color: #6b7280;" class="mobile-font-14">
                            Phone:
                          </td>
                          <td style="padding: 5px 0; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px; color: #333333; font-weight: 500;" class="mobile-font-14">
                            ${phone}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <!-- Patient Info Section : END -->

          <!-- Appointment Details Section : BEGIN -->
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td style="padding: 0 40px 20px 40px;" class="email-padding">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 6px;">
                  <tr>
                    <td style="padding: 20px;" class="mobile-padding">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td colspan="2" style="padding-bottom: 15px; font-family: Arial, sans-serif; font-size: 18px; line-height: 24px; color: #4f46e5; font-weight: bold;" class="mobile-font-16">
                            Appointment Details
                          </td>
                        </tr>
                        <tr>
                          <td width="30%" style="padding: 5px 0; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px; color: #6b7280;" class="mobile-font-14">
                            Service:
                          </td>
                          <td style="padding: 5px 0; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px; color: #333333; font-weight: 500;" class="mobile-font-14">
                            ${service}
                          </td>
                        </tr>
                        <tr>
                          <td width="30%" style="padding: 5px 0; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px; color: #6b7280;" class="mobile-font-14">
                            Date:
                          </td>
                          <td style="padding: 5px 0; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px; color: #333333; font-weight: 500;" class="mobile-font-14">
                            ${new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                          </td>
                        </tr>
                        <tr>
                          <td width="30%" style="padding: 5px 0; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px; color: #6b7280;" class="mobile-font-14">
                            Time:
                          </td>
                          <td style="padding: 5px 0; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px; color: #333333; font-weight: 500;" class="mobile-font-14">
                            ${time}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <!-- Appointment Details Section : END -->

          <!-- Notes Section : BEGIN (Conditional) -->
          ${notes ? `
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td style="padding: 0 40px 20px 40px;" class="email-padding">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 6px;">
                  <tr>
                    <td style="padding: 20px;" class="mobile-padding">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="padding-bottom: 15px; font-family: Arial, sans-serif; font-size: 18px; line-height: 24px; color: #4f46e5; font-weight: bold;" class="mobile-font-16">
                            Additional Notes
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 0; font-family: Arial, sans-serif; font-size: 14px; line-height: 22px; color: #333333;" class="mobile-font-14">
                            ${notes}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          ` : ''}
          <!-- Notes Section : END -->

          <!-- CTA Section : BEGIN -->
         
          <!-- CTA Section : END -->

          <!-- Footer : BEGIN -->
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td style="padding: 20px 40px; background-color: #f9fafb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top: 1px solid #e5e7eb; text-align: center;" class="email-padding">
                <p style="margin: 0 0 8px 0; font-family: Arial, sans-serif; font-size: 12px; line-height: 18px; color: #6b7280;">
                  © 2025 Ralas Speech and Hearing. All rights reserved.
                </p>
                <p style="margin: 0; font-family: Arial, sans-serif; font-size: 12px; line-height: 18px; color: #6b7280;">
                  2nd floor, 121, 6th C Main Road,<br>
                  4th Block, Jayanagar, Bengaluru, Karnataka 560011
                </p>
              </td>
            </tr>
          </table>
          <!-- Footer : END -->
        </td>
      </tr>
      <!-- Email Body : END -->

      <!-- Unsubscribe : BEGIN -->
      <tr>
        <td style="padding: 20px; text-align: center; font-family: Arial, sans-serif; font-size: 12px; line-height: 18px; color: #888888;">
          <p style="margin: 0;">This email was sent to you because an appointment was booked through your website.</p>
        </td>
      </tr>
      <!-- Unsubscribe : END -->
    </table>
  </div>
</body>
</html>
           
            ` ,
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
