// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: "smtp.office365.com",
//   port: 587,
//   secure: false, // Use `true` for port 465, `false` for all other ports
//   auth: {
//     user: "ayte2024@outlook.com",
//     pass: "12345678ayte",
//   },
// });

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     from: '"ayte 👻" <ayte2024@outlook.com>', // sender address
//     to: "afbravo.p5@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello wenas wenas?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
// }

// main().catch(console.error);


const nodemailer = require("nodemailer");
const path = require("path");

// Configuración del transporte (puedes usar cualquier servicio de correo compatible con nodemailer)
const transporter = nodemailer.createTransport({
  port: 587,
  host: "smtp.office365.com",
  secure: false,
  auth: {
    user: "riverayin03@outlook.com",
    pass: "yineth2002riv",
  },
});

// Detalles del correo
const mailOptions = {
  from: "riverayin03@outlook.com",
  to: "karinariv0311@gmail.com",
  subject: "Bienvenido a Yikart",
  text: "Descubre los mejores articulos en Yikart",
  html: `
    <div style="text-align: center;">
      <img src="cid:logoYikart" alt="Yikart Logo" style="width: 150px; height: auto;">
      <h1>¡Bienvenido a Yikart!</h1>
      <p>Estamos encantados de tenerte con nosotros.</p>
      <p>En Yikart encontrarás las mejores ofertas y productos artesanales.</p>
      <p>Visítanos en: <a href="https://www.instagram.com/yikart.03?igsh=MTc4aHFnbW1jcHF1Yg==">Yikart</a></p>
      <p>Gracias por ser parte de nuestra comunidad.</p>
    </div>
  // `,
  // attachments: [
  //   {
  //     filename: "logo.png",
  //     path: path.join(
  //       "C:",
  //       "Users",
  //       "andre",
  //       "Desktop",
  //       "YK",
  //       "Trabajos",
  //       "Node",
  //       "Logo.png"
  //     ), // Ajusta la ruta a tu archivo
  //     cid: "logoYikart", // Identificador de contenido para la referencia en HTML
  //   },
  // ],
};

// Enviar el correo
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Correo enviado: " + info.response);
  }
});
