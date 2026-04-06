import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // 1. Extract the form data sent from CareersModal
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const department = formData.get('category') as string;
    const role = formData.get('role') as string;
    const file = formData.get('attachment') as File | null;

    if (!name || !email || !department || !role || !file) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 2. Convert the uploaded PDF/Doc into a Node.js Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 3. Hardcoded Nodemailer Transporter for Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'newluspharma@gmail.com',
        pass: 'cfpk reod totu eqwx',
      },
    });

    // 4. Email 1: Internal Notification (Sent to HR/Contact Inbox)
    const internalMailOptions = {
      from: 'newluspharma@gmail.com',
      to: 'contact@newluspharma.com',
      replyTo: email,
      subject: `New Job Application: ${name} - ${role}`,
      text: `
New Job Application Received!

Applicant Details:
------------------
Name: ${name}
Email: ${email}
Department: ${department}
Role Applied For: ${role}

The applicant's resume/CV is attached to this email.
      `,
      attachments: [
        {
          filename: file.name,
          content: buffer,
          contentType: file.type,
        },
      ],
    };

    // 5. Email 2: Auto-Reply to the Applicant
    const autoReplyOptions = {
      from: '"Newlus Pharma Careers" <newluspharma@gmail.com>',
      to: email,
      subject: `Application Received: ${role} at Newlus Pharma`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #1B365D; max-w: 600px; margin: 0 auto; line-height: 1.6;">
          <h2 style="color: #0A5C36;">Thank You for Your Application</h2>
          <p>Dear ${name},</p>
          <p>This email is to confirm that we have successfully received your application for the <strong>${role}</strong> position within our <strong>${department}</strong> department.</p>
          <p>Our Human Resources team will review your resume and qualifications. If your profile matches our current requirements, we will be in touch regarding the next steps.</p>
          <p>Thank you for your interest in joining Newlus Pharma and helping us advance global healthcare.</p>
          <br>
          <p style="font-size: 14px; color: #666;">Best regards,<br><strong>Talent Acquisition Team</strong><br>Newlus Pharma<br>Floor -II, B-05, Kesar, HBU(Main), Regional College Ajmer, Rajasthan</p>
        </div>
      `,
    };

    // 6. Send both emails simultaneously
    await Promise.all([
      transporter.sendMail(internalMailOptions),
      transporter.sendMail(autoReplyOptions)
    ]);

    return NextResponse.json({ success: true, message: 'Application sent successfully' });

  } catch (error) {
    console.error('SMTP API Error:', error);
    return NextResponse.json({ error: 'Failed to send application.' }, { status: 500 });
  }
}