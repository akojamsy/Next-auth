import nodemailer from "nodemailer";

export const sendVerificationEmail = async (email: any, token: any) => {
  try {
    // create a transport
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "ffd6c830daab24",
        pass: "3484dbee36d4f4",
      },
    });

    const mailOptions = {
      from: "james@gmail.com",
      to: email,
      subject: "Verify your password",
      html: `<p>Click <a href="http://localhost:3000/auth/new-verification?token=${token}" target="_blank">here</a> to confirm your email.</p>`,
    };

    await transport.sendMail(mailOptions);
  } catch (error: any) {
    console.log(error);
  }
};

export const sendPasswordResetEmail = async (email: any, token: any) => {
  try {
    // create a transport
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "ffd6c830daab24",
        pass: "3484dbee36d4f4",
      },
    });

    const mailOptions = {
      from: "james@gmail.com",
      to: email,
      subject: "Reset your password",
      html: `<p>Click <a href="http://localhost:3000/auth/new-password?token=${token}" target="_blank">here</a> to reset your password.</p>`,
    };

    await transport.sendMail(mailOptions);
  } catch (error: any) {
    return { error: error.message };
  }
};

export const sentTwoFactorTokenEmail = async (email: string, token: string) => {
  try {
    // create a transport
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "ffd6c830daab24",
        pass: "3484dbee36d4f4",
      },
    });

    const mailOptions = {
      from: "james@gmail.com",
      to: email,
      subject: "2FA Code",
      html: `<p>Your 2FA code is ${token}</p>`,
    };

    await transport.sendMail(mailOptions);
  } catch (error: any) {
    return { error: error.message };
  }
};
