import { Document } from "mongoose";

export interface IAuth extends Document {
  name?: string;
  about?: string;
  avatar: string;
  email: string;
  passwordHash: string;
  _doc?: any;
}

export interface IPostImages extends Document {
  title: string;
  viewsCount: number;
  user: {
    type: number;
    ref: "User";
    required: boolean;
  };
  image: string;
}
