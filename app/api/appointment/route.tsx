import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json({ message: 'Missing email API key' }, { status: 500 });
        }

        const { formData, date } = await request.json();

        console.log('Contact form submission:', { formData, date });


        // Basic validation
        if (!formData  || !formData.name || !formData.email || !formData.phone ) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // Send email to clinic
        const { error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['dharmaseervijb18239@gmail.com'],
            subject: `New Contact Form Submission from ${name}`,
            html: `
                
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
