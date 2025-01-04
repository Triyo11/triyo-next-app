import EmailTemplate from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface PostRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  const { name, email, message }: PostRequestBody = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: 'Web Portfolio <onboarding@resend.dev>',
      to: ['rusdiantoro117@gmail.com'],
      subject: 'Message from Web Portfolio',
      react: EmailTemplate({ 
        name,
        email,
        message,
       }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
