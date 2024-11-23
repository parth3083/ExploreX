import mongoose, { Schema, Document } from "mongoose";

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

const searchModel = mongoose.model<Isearch>("SearchData", searhSchema);
export default searchModel;
