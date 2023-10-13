import mongoose from "mongoose";
import { IAuth } from "../type";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 30,
      default: "ChampionTommy",
    },
    about: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 30,
      default: "noname",
    },
    avatar: {
      type: String,
      default: "https://avatars.githubusercontent.com/u/79994252?v=4",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IAuth>("User", userSchema);
