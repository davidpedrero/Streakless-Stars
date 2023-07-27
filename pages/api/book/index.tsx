export default function handler(req: any, res: any) {
  const { method } = req;
  console.log(method);

  switch (method) {
    case 'GET':
      res.status(200).json({ name: 'Gaby Pedrero' });
      break;

    case 'POST':
      res.status(200).json({ response: "POST Success" });
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}