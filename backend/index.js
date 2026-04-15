const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/send-email', async (req, res) => {
  const { name, email, phone, type, message } = req.body;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.AUDIT_RECIPIENT_EMAIL,
      subject: `Nueva solicitud de asociación de ${name}`,
      html: `
        <h2>Nueva solicitud de asociación - AEXTRECIBER</h2>
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Teléfono:</b> ${phone}</p>
        <p><b>Tipo de asociado:</b> ${type}</p>
        <p><b>Mensaje:</b> ${message || 'No proporcionado'}</p>
      `
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));