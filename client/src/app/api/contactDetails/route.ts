import dbConnect from "@/lib/dbConnect";
import contactModel from "@/models/contact";
import { z } from "zod";

export async function POST(req: Request) {
  await dbConnect();
  try {
    const contactSchema = z.object({
      email: z.string().email(),
      username: z.string().min(5, "Email must not be empty"),
      review: z.string().min(5, "Review must not be empty"),
    });

    const parsedBody = contactSchema.parse(await req.json());
    const { username, email, review } = parsedBody;
    const newContact = new contactModel({
      email,
      username,
      review,
    });
    await newContact.save();
    return Response.json({ message: "Review submitted successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json({
        message: error.errors[0].message,
      });
    }
    console.error(error);

    return Response.json({ message: "Internal server error" });
  }
}
