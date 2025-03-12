import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//routes

import userRouter from "./routes/user.routes.js";

// routes declerationOrd

app.use("/api/v1/auth", userRouter);

export { app };
