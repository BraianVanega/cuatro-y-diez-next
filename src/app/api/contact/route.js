import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validar que todos los campos estén presentes
    if (!name || !email || !phone || !message) {
      return Response.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Configurar el transporter de nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true para 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verificar que las credenciales estén configuradas
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return Response.json(
        { error: "Configuración de email no encontrada" },
        { status: 500 }
      );
    }

    // Configurar el email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL, // Email donde recibirás los mensajes
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email, // Para que puedas responder directamente al usuario
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);

    return Response.json(
      { message: "Email enviado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar email:", error);
    return Response.json(
      { error: "Error al enviar el email. Por favor, intenta nuevamente." },
      { status: 500 }
    );
  }
}
