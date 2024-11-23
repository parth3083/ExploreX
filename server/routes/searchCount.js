const { z } = require("zod");
const searchModel = require("../model/search");

const searchCount = async (req, res) => {
  try {
    const searchSchema = z.object({
      query: z.string().min(1, "Query must not be empty"),
    });

    const parsedBody = searchSchema.parse(req.body);
    const { query } = parsedBody;
    const isTopicAlreadyExists = await searchModel.findOne({ topic: query });
    if (isTopicAlreadyExists) {
      isTopicAlreadyExists.searchCount += 1;
      await isTopicAlreadyExists.save();
      return res.status(200).json({ message: "search count increased" });
    } else {
      const newSearch = new searchModel({
        topic: query,
        searchCount: 1,
      });
      await newSearch.save();
      return res.status(201).json({ message: "New topics added to the db" });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: error.errors[0].message,
      });
    }
    console.error(error);

    return res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = searchCount;
