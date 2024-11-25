import mongoose, { Schema, Document, Model } from "mongoose";

interface Isearch extends Document {
  topic: string;
  searchCount: number;
}

const searhSchema: Schema = new Schema(
  {
    topic: {
      type: String,
      required: true,
      unique: true,
    },
    searchCount: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const searchModel: Model<Isearch> =
  mongoose.models.SearchData || mongoose.model<Isearch>('SearchData', searhSchema);

export default searchModel;
