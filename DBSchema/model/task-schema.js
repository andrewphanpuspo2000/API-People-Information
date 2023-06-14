import mongoose from "mongoose";

export const buildSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Information", buildSchema);
