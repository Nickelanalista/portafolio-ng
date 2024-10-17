const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    console.log('Configurando transporter...');
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 'undefined');

    // Configura el transporter de nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true para 465, false para otros puertos
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      console.log('Intentando enviar correo...');
      // Envía el correo
      await transporter.sendMail({
        from: `"Formulario de Contacto" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER, // tu dirección de correo donde quieres recibir los mensajes
        subject: `Nuevo mensaje de ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
        html: `<p><strong>Nombre:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Mensaje:</strong> ${message}</p>`,
      });

      console.log('Correo enviado con éxito');
      res.status(200).json({ message: 'Correo enviado con éxito' });
    } catch (error) {
      console.error('Error detallado:', error);
      res.status(500).json({ message: 'Error al enviar el correo', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
