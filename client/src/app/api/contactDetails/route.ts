import dbConnect from "@/lib/dbConnect";
import contactModel from "@/models/contact";
import { z } from "zod";

export async function POST(req: Request) {
  await dbConnect();
  try {
    const contactSchema = z.object({
      email: z.string().email(),
      username: z.string().min(5, "Username must not be empty"),
      review: z.string().min(5, "Review must not be empty"),
    });

    const parsedBody = contactSchema.parse(await req.json());
    const { username, email, review } = parsedBody;

    const result = await contactModel.updateOne(
      { email },
      {
        $push: { reviews: review },
        $set: { username },
      },
      { upsert: true }
    );

    if (result.modifiedCount > 0 || result.upsertedCount > 0) {
      return Response.json(
        { message: "Review submitted successfully" },
        { status: 200 }
      );
    } else {
      return Response.json(
        { message: "Review could not be added" },
        { status: 400 }
      );
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json({
        message: error.errors[0].message,
      });
    }
    console.error(error);

    return Response.json({ message: "Internal server error" }, { status: 400 });
  }
}
