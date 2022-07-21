import { Router } from "express";
import videoRouter from "./video.route";

const router = Router();

//Just for test purpouse

router.use("/videos", videoRouter);

router.use("/", (_req, res) => {
    res.json("Hello world!");
});



export default router;
