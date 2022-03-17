import nodemailer from 'nodemailer';

const emailRegistration = async (data) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        }
    });
    const { email, name, token } = data;
    const info = await transport.sendMail({
      from: 'VPA - Veterinary Patients Administrator',
      to: email,
      subject: 'Confirm your account',
      text: 'Confirm your account',
      html: `<p>Hi ${ name }, confirm your account in PVA</p>
        <p>Your account is ready, you just have to check it in the following link: 
        <a href="${ process.env.FRONTEND_URL }/confirm-account/${ token }">Confirm account</p></a>
        <p>If you don't create this account, you could ignore this email</p>
      `
    });
    console.log('Email sended: %s', info.messageId);
}

export default emailRegistration;