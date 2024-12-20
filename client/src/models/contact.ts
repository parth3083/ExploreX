import mongoose, { Schema, Document, Model } from "mongoose";

interface Icontact extends Document {
  email: string;
  username: string;
  reviews: string[];
}

const contactSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    reviews: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const contactModel: Model<Icontact> =
  mongoose.models.ContactDetails ||
  mongoose.model<Icontact>("ContactDetails", contactSchema);

export default contactModel;
