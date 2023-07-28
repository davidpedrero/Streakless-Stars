import { Resend } from 'resend';
import WelcomeEmail from '@/emails/welcome';
import BookEmail from '@/emails/book';

const resend = new Resend(process.env.RESEND_API_KEY);

export default function handler(req: any, res: any) {
  const { method } = req;
  // console.log(method);

  switch (method) {
    case 'GET':
      res.status(200).json({ name: 'Gaby Pedrero' });
      break;

    case 'POST':
      const { name, email, address, date, time, service } = req.body;

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
        subject: 'Customer Appointment: Booked',
        react: BookEmail({
          name: name,
          email: email,
          address: address,
          date: date,
          time: time,
          service: service
        }),
      });

      res.status(200).json({ response: "POST Success" });

      break;

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}