import nodemailer from 'nodemailer'

interface LeadNotificationData {
  name: string
  email: string
  company: string
  phone?: string
  companyType?: string
  service?: string
  companySize?: string
  message: string
}

export async function sendLeadNotification(data: LeadNotificationData) {
  // Create transporter using Hostinger SMTP settings
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true, // use SSL
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  // Email content
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #08314d; border-bottom: 3px solid #673DE6; padding-bottom: 10px;">
        New Lead Submission - DataArk Labs
      </h2>

      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
        <h3 style="color: #08314d; margin-top: 0;">Contact Information</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Company:</strong> ${data.company}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
      </div>

      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
        <h3 style="color: #08314d; margin-top: 0;">Company Details</h3>
        ${data.companyType ? `<p><strong>Company Type:</strong> ${data.companyType}</p>` : ''}
        ${data.companySize ? `<p><strong>Company Size:</strong> ${data.companySize}</p>` : ''}
        ${data.service ? `<p><strong>Service Interest:</strong> ${data.service}</p>` : ''}
      </div>

      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
        <h3 style="color: #08314d; margin-top: 0;">Message</h3>
        <p style="white-space: pre-wrap;">${data.message}</p>
      </div>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
        <p>This lead was submitted through the DataArk Labs website contact form.</p>
      </div>
    </div>
  `

  const emailText = `
New Lead Submission - DataArk Labs

CONTACT INFORMATION
-------------------
Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
${data.phone ? `Phone: ${data.phone}` : ''}

COMPANY DETAILS
---------------
${data.companyType ? `Company Type: ${data.companyType}` : ''}
${data.companySize ? `Company Size: ${data.companySize}` : ''}
${data.service ? `Service Interest: ${data.service}` : ''}

MESSAGE
-------
${data.message}

---
This lead was submitted through the DataArk Labs website contact form.
  `

  // Send email
  await transporter.sendMail({
    from: `"DataArk Labs Website" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL || 'info@dataarklabs.com',
    subject: `New Lead: ${data.name} from ${data.company}`,
    text: emailText,
    html: emailHtml,
  })
}
