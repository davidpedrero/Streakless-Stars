import { Resend } from 'resend';
import WelcomeEmail from '@/emails/welcome';
import ContactEmail from '@/emails/contact';

const resend = new Resend(process.env.RESEND_API_KEY);

export default function handler(req: any, res: any) {
  const { method } = req;
  // console.log(method);

  switch (method) {
    case 'GET':
      res.status(200).json({ name: 'Gaby Pedrero' });
      break;

    case 'POST':
      const { name, email, message } = req.body;

      resend.sendEmail({
        from: 'oboarding@resend.dev',
        to: email,
        subject: 'Welcome To Sreakless Stars',
        react: WelcomeEmail({
          name: name
        }),
      });

      resend.sendEmail({
        from: 'oboarding@resend.dev',
        to: 'pedrero888@gmail.com',
        subject: 'Customer Inquiry: Contact',
        react: ContactEmail({
          name: name,
          email: email,
          message: message
        }),
      });

      res.status(200).json({ response: "POST Success" });

      break;

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}