const nodemailer = require('nodemailer');

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send email notification for new contact
exports.sendContactNotification = async (contact) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission: ${contact.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contact.fullName}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Phone:</strong> ${contact.phone || 'Not provided'}</p>
        <p><strong>Parish:</strong> ${contact.parish || 'Not provided'}</p>
        <p><strong>Priority:</strong> ${contact.priority}</p>
        <p><strong>Subject:</strong> ${contact.subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${contact.message}</p>
        <hr>
        <p><a href="${process.env.FRONTEND_URL}/admin">View in Admin Dashboard</a></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Admin notification sent');
  } catch (error) {
    console.error('❌ Email error:', error);
  }
};

// Send auto-reply to user
exports.sendAutoReply = async (contact) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: contact.email,
      subject: 'Thank You for Contacting the Catholic Diocese of Malakal',
      html: `
        <h2>Thank You for Your Message</h2>
        <p>Dear ${contact.fullName},</p>
        <p>Thank you for reaching out to the Catholic Diocese of Malakal. We have received your message and will respond to you within 2-3 business days.</p>
        <p><strong>Your Message:</strong></p>
        <p style="white-space: pre-wrap;">${contact.message}</p>
        <hr>
        <p><em>"The Lord bless you and keep you." - Numbers 6:24</em></p>
        <p>In Christ,</p>
        <p><strong>Catholic Diocese of Malakal</strong></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Auto-reply sent to user');
  } catch (error) {
    console.error('❌ Auto-reply error:', error);
  }
};

// Send donation confirmation
exports.sendDonationConfirmation = async (donation) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: donation.email,
      subject: 'Thank You for Your Generous Donation',
      html: `
        <h2>Thank You for Your Generosity!</h2>
        <p>Dear ${donation.name},</p>
        <p>Thank you for your generous donation of <strong>$${donation.amount.toFixed(2)}</strong> to the Catholic Diocese of Malakal.</p>
        <p>Your contribution will help us continue our mission of serving the community, providing education, healthcare, and spiritual guidance.</p>
        ${donation.message ? `<p><strong>Your Message:</strong> ${donation.message}</p>` : ''}
        <hr>
        <p><em>"God loves a cheerful giver." - 2 Corinthians 9:7</em></p>
        <p>May God bless you abundantly!</p>
        <p><strong>Catholic Diocese of Malakal</strong></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Donation confirmation sent');
  } catch (error) {
    console.error('❌ Donation email error:', error);
  }
};