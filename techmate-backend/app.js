import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import ErrorMiddleware from "./middlewares/Error.js";

config({
  path: "./config/config.env",
});

const app = express();

// using middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(morgan("dev"));

// Importing & Using routes
import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";

app.use("/api/v1", course);
app.use("/api/v1", user);

export default app;

app.use(ErrorMiddleware);
