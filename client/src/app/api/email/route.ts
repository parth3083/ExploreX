import { Resend } from "resend";
import { StripeWelcomeEmail } from "../../../../emails/emailTemplate";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  const { email } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Hello world",
      react: StripeWelcomeEmail(),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
