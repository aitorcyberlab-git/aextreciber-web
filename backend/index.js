app.post('/send-email', async (req, res) => {
  const { name, email, phone, type, message } = req.body;

  console.log('Petición recibida:', { name, email, phone, type });
  console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? 'OK' : 'NO DEFINIDA');
  console.log('AUDIT_RECIPIENT_EMAIL:', process.env.AUDIT_RECIPIENT_EMAIL || 'NO DEFINIDA');

  try {
    const response = await resend.emails.send({
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
    console.log('Respuesta de Resend:', response);
    res.json({ success: true });
  } catch (error) {
    console.error('Error al enviar:', error);
    res.status(500).json({ error: error.message });
  }
});