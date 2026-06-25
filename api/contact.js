import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }

  const { name, email, phone, serviceType, message } = req.body;

  // Validate fields
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields (name, email, phone, message)' });
  }

  // Check if SMTP environment variables are set
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT || 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.error('SMTP configuration is missing in environment variables.');
    return res.status(500).json({ 
      success: false, 
      error: 'Server email configuration is incomplete. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS environment variables.' 
    });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: parseInt(smtpPort) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    // Email content options
    const mailOptions = {
      from: `"${name} via HCT" <${smtpUser}>`, // Must be the authenticated user to pass SPF/DKIM
      to: receiverEmail,
      replyTo: email, // Allows direct reply to the customer's email
      subject: `New Connection Request: ${serviceType || 'General Inquiry'} from ${name}`,
      text: `
New Contact Form Submission from Hyperconnect Technologies Website:

Name: ${name}
Email: ${email}
Phone: ${phone}
Service Requested: ${serviceType || 'Not specified'}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <div style="background: linear-gradient(90deg, #0052d4 0%, #4364f7 100%); color: #ffffff; padding: 24px; text-align: center;">
            <h2 style="margin: 0; font-size: 22px; font-weight: bold; letter-spacing: 0.5px;">New Connection Request</h2>
            <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Hyperconnect Technologies Website</p>
          </div>
          <div style="padding: 30px; background-color: #ffffff; color: #2d3748;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr style="border-bottom: 1px solid #edf2f7;">
                <td style="padding: 12px 0; font-weight: bold; color: #718096; width: 140px;">Customer Name:</td>
                <td style="padding: 12px 0; color: #1a202c;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #edf2f7;">
                <td style="padding: 12px 0; font-weight: bold; color: #718096;">Email Address:</td>
                <td style="padding: 12px 0; color: #1a202c;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #edf2f7;">
                <td style="padding: 12px 0; font-weight: bold; color: #718096;">Phone Number:</td>
                <td style="padding: 12px 0; color: #1a202c;"><a href="tel:${phone}">${phone}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #edf2f7;">
                <td style="padding: 12px 0; font-weight: bold; color: #718096;">Service Type:</td>
                <td style="padding: 12px 0; color: #1a202c; font-weight: 600;">${serviceType || 'General Inquiry'}</td>
              </tr>
            </table>
            
            <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; border-left: 4px solid #4364f7; margin-top: 25px;">
              <h4 style="margin: 0 0 10px 0; color: #4a5568; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Message Details:</h4>
              <p style="margin: 0; line-height: 1.6; font-size: 14px; white-space: pre-line; color: #2d3748;">${message}</p>
            </div>
          </div>
          <div style="background-color: #f7fafc; padding: 15px; text-align: center; font-size: 12px; color: #a0aec0; border-top: 1px solid #edf2f7;">
            This email was automatically generated from the Hyperconnect Technologies website contact form.
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log(`Email successfully sent from ${email} to ${receiverEmail}`);

    return res.status(200).json({ success: true, message: 'Your request has been submitted successfully.' });
  } catch (error) {
    console.error('Nodemailer error sending SMTP mail:', error);
    return res.status(500).json({ 
      success: false, 
      error: `Failed to send email. Details: ${error.message}` 
    });
  }
}
