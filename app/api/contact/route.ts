import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Sin dominio verificado, Resend solo permite enviar a tu propio email.
// Para enviar a otros (ej. adelacavia@gmail.com): verificar dominio en resend.com/domains
// y cambiar `from` a un email de ese dominio (ej. contacto@tudominio.com).
// const DESTINATION_EMAIL = process.env.CONTACT_DESTINATION_EMAIL ?? "adelacavia@gmail.com";
const DESTINATION_EMAIL = "ulises@cantalupe.com.ar";


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, mensaje } = body;

    if (!nombre?.trim() || !email?.trim() || !mensaje?.trim()) {
      return NextResponse.json(
        { error: "Faltan nombre, email o mensaje." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Servicio de correo no configurado (RESEND_API_KEY)." },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Adela - Contacto <onboarding@resend.dev>",
      to: [DESTINATION_EMAIL],
      replyTo: email.trim(),
      subject: `Contacto web: ${nombre.trim()}`,
      html: `
        <p><strong>Nombre:</strong> ${escapeHtml(nombre.trim())}</p>
        <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(mensaje.trim()).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Error al enviar el mensaje." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (c) => map[c] ?? c);
}
