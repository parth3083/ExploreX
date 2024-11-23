import dbConnect from "@/lib/dbConnect";
import searchModel from "@/models/user";
import { z } from "zod";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const searchSchema = z.object({
      query: z.string().min(1, "Query must not be empty"),
    });

    const parsedBody = searchSchema.parse(await request.json());
    const { query } = parsedBody;
    const isTopicAlreadyExists = await searchModel.findOne({ topic: query });
    if (isTopicAlreadyExists) {
      isTopicAlreadyExists.searchCount += 1;
      await isTopicAlreadyExists.save();
      return Response.json({ message: "search count increased" });
    } else {
      const newSearch = new searchModel({
        topic: query,
        searchCount: 1,
      });
      await newSearch.save();
      return Response.json({ message: "New topics added to the db" });
    }
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
