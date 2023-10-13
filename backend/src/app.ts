import "dotenv/config";
import fs from "fs";
import path from "path";
import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import multer from "multer";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { rateLimit } from "express-rate-limit";
import { loginValidation, registerValidation } from "./validation.ts";
import { imagesController, userController } from "./controllers/index.ts";
import validationErrors from "./utils/validationErrors.ts";

const uploadFolder = path.join(__dirname, "../public/uploads");

if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder);
}
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, uploadFolder);
  },
  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const originalExtension = file.originalname.split(".").pop();
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + originalExtension);
  },
});

const upload = multer({ storage });
const app = express();
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
} as ConnectOptions);

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: "draft-7", // Set `RateLimit` and `RateLimit-Policy` headers
  legacyHeaders: false,
});

app.use(limiter);

app.use("/uploads", express.static("uploads"));

app.post(
  "/upload",
  function(req, res, next) {
    upload.single("image")(req, res, function(err) {
      if (err instanceof multer.MulterError) {
        // Обрабатываем ошибку multer
        res.status(400).json({ error: "Ошибка загрузки файла" });
      } else if (err) {
        // Обрабатываем другие ошибки
        res.status(500).json({ error: "Внутренняя ошибка сервера" });
      } else {
        // Делаем что-то с загруженным файлом
        next();
      }
    });
  },
  userController.checkAuthorize,
  function(req, res) {
    res.json({
      url: `/uploads/${req.file.filename}`,
    });
  },
  function(err, req, res, next) {
    // Обрабатываем ошибку
    res.status(400).json({ error: err.message });
  }
);
app.post(
  "/signup",
  registerValidation,
  validationErrors,
  userController.register
);
app.post("/signin", loginValidation, validationErrors, userController.login);

app.get("/images", imagesController.getImages);
app.patch("/images/:id", userController.checkAuthorize, imagesController.update);
app.post("/images", userController.checkAuthorize, imagesController.create);
app.delete(
  "/images/:id",
  userController.checkAuthorize,
  imagesController.remove
);

app.get("/authorize", userController.checkAuthorize, userController.getUser);
app.listen(process.env.PORT, () => {
  return console.log(`http://localhost:${process.env.PORT}`);
});
