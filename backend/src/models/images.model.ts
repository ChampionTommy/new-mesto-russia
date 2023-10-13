import mongoose from "mongoose";
import { IPostImages } from "../type";

const imagesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "Без названия",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    imageUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IPostImages>("Images", imagesSchema);
