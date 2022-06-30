import express from "express";
import morgan from "morgan";
import cors from "cors";
import videoRouter from "./routes/video.route";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(videoRouter);

export default app;
