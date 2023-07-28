import { Resend } from 'resend';
import WelcomeEmail from '@/emails/welcome';
import ContactEmail from '@/emails/contact';

const resend = new Resend("re_jFGHA8CR_F1e2yTiykvHGwDfYQ2acuSjp");
// const resend = new Resend(process.env.RESEND_API_KEY);

export default function handler(req: any, res: any) {
  const { method } = req;
  console.log(method);

  switch (method) {
    case 'GET':
      res.status(200).json({ name: 'Gaby Pedrero' });
      break;

    case 'POST':
      console.log(req.body);

      const { name, email, message } = req.body;

      console.log(name)
      console.log(email)
      console.log(message)

      resend.sendEmail({
        from: 'oboarding@resend.dev',
        to: email,
        subject: 'Welcome',
        react: WelcomeEmail({
          name: name
        }),
      });

      // resend.sendEmail({
      //   from: 'oboarding.resend.dev',
      //   to: 'pedrero888@gmail.com',
      //   subject: 'Customer Inquiry',
      //   react: ContactEmail({
      //     name: name,
      //     email: email,
      //     message: message
      //   }),
      // });

      res.status(200).json({ response: "POST Success" });

      break;

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}