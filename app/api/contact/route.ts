import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Added 'mobile' to the destructuring
    const { name, email, mobile, company, subject, message } = body;

    // Added mobile to the validation check
    if (!name || !email || !mobile || !company || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Hostinger SMTP Configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: 'contact@newluspharma.com',
        pass: 'Newlus@1234',
      },
    });

    const internalMailOptions = {
      from: 'contact@newluspharma.com',
      to: 'contact@newluspharma.com',
      replyTo: email,
      subject: `New Website Inquiry: ${subject} from ${name}`,
      text: `
New Inquiry Received from Website!

Details:
------------------
Name: ${name}
Company/Hospital: ${company}
Email: ${email}
Mobile Number: ${mobile}
Inquiry Type: ${subject}

Message:
${message}
      `,
    };

    const autoReplyOptions = {
      from: '"Newlus Pharma Partnerships" <contact@newluspharma.com>',
      to: email,
      subject: `Thank you for contacting Newlus Pharma`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #1B365D; max-w: 600px; margin: 0 auto; line-height: 1.6;">
          <h2 style="color: #0A5C36;">We have received your inquiry</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to Newlus Pharma regarding <strong>${subject}</strong>. We have received your message and appreciate your interest in partnering with us.</p>
          <p>One of our dedicated team members is currently reviewing your requirements and will get back to you within the next 24 business hours.</p>
          <p>For urgent matters, please feel free to reach us directly at +91 92141 28213 or +91 89529 13119.</p>
          <br>
          <p style="font-size: 14px; color: #666;">Warm regards,<br><strong>Partnerships Team</strong><br>Newlus Pharma<br>Floor -II, B-05, Kesar, HBU(Main), Regional College Ajmer, Rajasthan</p>
        </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(internalMailOptions),
      transporter.sendMail(autoReplyOptions)
    ]);

    return NextResponse.json({ success: true, message: 'Inquiry sent successfully' });

  } catch (error) {
    console.error('SMTP API Error:', error);
    return NextResponse.json({ error: 'Failed to send inquiry.' }, { status: 500 });
  }
}