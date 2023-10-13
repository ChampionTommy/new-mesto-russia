import "dotenv/config";
import userSchema from "../models/user.model.ts";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { IAuth } from "../type.ts";
import userModel from "../models/user.model.ts";

const { NODE_ENV, JWT_SECRET } = process.env as {
  [key: string]: string;
};
export const register = async (req, res) => {
  try {
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc: IAuth = new userSchema({
      email: req.body.email,
      avatar: req.body.avatar,
      passwordHash: hash,
    });
    const user = await doc.save();

    const token = jwt.sign(
      { _id: user._id },
      process.env.NODE_ENV === "development"
        ? (process.env.JWT_SECRET as Secret)
        : "9198ad99c86faa69436dbd8602f720c5e5d3b33f4958c399e7c278a54a9721dc",
      { expiresIn: "7d" }
    );
    const { passwordHash, ...userData } = user._doc;

    res.json({
      ...userData,
      token,
    });
  } catch (err) {
    res.status(500).json({
      message: "Не удалось зарегистрироваться",
    });
  }
};

export const login = async (req, res) => {
  try {
    const user = await userSchema
      .findOne({
        email: req.body.email,
      })
      .select("+passwordHash");

    if (!user) {
      return res.status(404).json({
        message: "Пользователь не найден",
      });
    }

    const isValidPass = await bcrypt.compare(
      req.body.password,
      user.passwordHash
    );

    if (!isValidPass) {
      return res.status(400).json({
        message: "Неверный логин или пароль",
      });
    }
    const token = jwt.sign(
      { _id: user._id },
      NODE_ENV === "production"
        ? JWT_SECRET
        : "9198ad99c86faa69436dbd8602f720c5e5d3b33f4958c399e7c278a54a9721dc",
      { expiresIn: "7d" }
    );
    res.status(200).send({ _id: user._id, token });
  } catch (err) {
    res.status(500).json({
      message: "Не удалось авторизоваться",
    });
  }
};

export const checkAuthorize = (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

  if (token) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

      req.userId = decoded._id;
      next();
    } catch (e) {
      return res.status(403).json({
        message: "Нет доступа",
      });
    }
  } else {
    return res.status(403).json({
      message: "Нет доступа",
    });
  }
};
export const getUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        message: "Пользователь не найден",
      });
    }

    const { passwordHash, ...userData } = user._doc;

    res.json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Нет доступа",
    });
  }
};
