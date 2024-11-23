const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema(
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

const searchModel = mongoose.model("search-data", searchSchema);
module.exports = searchModel;
