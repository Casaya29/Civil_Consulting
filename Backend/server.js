import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // lee las variables del archivo .env

const app = express();
app.use(cors());
app.use(express.json());

// Ruta para recibir datos del formulario
app.post("/send", async (req, res) => {
  const { nombre, correo, mensaje } = req.body;


  try {
    // Configura tu cuenta de correo
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // tu correo
        pass: process.env.EMAIL_PASS, // contraseña de aplicación
      },
    });

    // Envía el correo
    await transporter.sendMail({
      from: correo,
      to: process.env.EMAIL_USER, // a tu correo
      subject: `Nuevo mensaje de ${nombre}`,
      text: mensaje,
      html: `<p><b>Nombre:</b> ${nombre}</p>
             <p><b>Email:</b> ${correo}</p>
             <p><b>Mensaje:</b> ${mensaje}</p>`,
    });

    res.status(200).send("✅ Mensaje enviado correctamente");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Error al enviar mensaje");
  }
});

// Levantar servidor
app.listen(5000, () => {
  console.log("Servidor corriendo en http://localhost:5000");
});



