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
      secure: true, // true for 465
      auth: {
        user: 'newluspharma@gmail.com',
        pass: 'cfpk reod totu eqwx', // Your App Password
      },
    });

    // 4. Construct the Email Details
    const mailOptions = {
      from: 'newluspharma@gmail.com', // Must match the auth user
      to: 'contact@newluspharma.com', // Where you want to receive the applications
      replyTo: email, // If you hit "reply", it goes directly to the applicant
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

    // 5. Send the Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Application sent successfully' });

  } catch (error) {
    console.error('SMTP API Error:', error);
    return NextResponse.json({ error: 'Failed to send application.' }, { status: 500 });
  }
}