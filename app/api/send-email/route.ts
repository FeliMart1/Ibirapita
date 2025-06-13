import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.json();

  try {
    const { firstName, lastName, company, email, phone, message } = data;

    const response = await resend.emails.send({
      from: 'Imagine UY <onboarding@resend.dev>',
      to: 'felipemartinezcapurro2016@gmail.com',
      subject: `Nuevo contacto de ${firstName} ${lastName}`,
      html: `
        <h2>Nuevo mensaje desde Ibirapitá</h2>
        <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong><br>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, response });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error });
  }
}
