import mongoose, { Schema, Model, Document } from "mongoose";

interface Inews extends Document {
  todaysNews: [];
  thisWeeksNews: [];
  thisMonthsNews: [];
  trendingTopics: [];
  lastUpdated: Date;
}

const newSchema: Schema = new Schema({
  todaysNews: [
    {
      title: String,
      imageUrl: String,
    },
  ],
  thisWeeksNews: [
    {
      title: String,
      imageUrl: String,
    },
  ],
  thisMonthsNews: [
    {
      title: String,
      imageUrl: String,
    },
  ],
  trendingTopics: [
    {
      imageUrl: String,
      title: String,
    }
  ],
  lastUpated: {
    type: Date,
    default: Date.now(),
  },
});

const NewsModel: Model<Inews> =
  mongoose.models.NewsData || mongoose.model<Inews>("NewsData", newSchema);
export default NewsModel;
