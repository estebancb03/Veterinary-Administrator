import nodemailer from 'nodemailer';

const emailRecoverPassword = async (data) => {
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
      subject: 'Recover your password',
      text: 'Recover your password',
      html: `<p>Hi ${ name }, you have requested to recover your password</p>
        <p>Follow the next link to generate a new password: 
        <a href="${ process.env.FRONTEND_URL }/recover-password/${ token }">Recover your password</p></a>
        <p>If you don't create this account, you could ignore this email</p>
      `
    });
    console.log('Email sended: %s', info.messageId);
}

export default emailRecoverPassword;