// import { NextResponse } from 'next/server';
// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// const fromEmail = process.env.FROM_EMAIL;


export async function POST(request) {
  const data = await request.json();
  const { email, subject, message } = data;

  try {
    const data = await resend.emails.send({
      from: `Portfolio Message <onboarding@resend.dev>`,
      to: ['chetann8900@gmail.com'],
      subject: subject,
      react: (
        <>

          <h1> Message from : {email}</h1>
          <h1>Subject : {subject}</h1>
          <h1>
            Message :
          </h1>
          <p>{message}</p>
        </>
      ),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
