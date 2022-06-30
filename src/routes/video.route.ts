import { Router } from "express";
import * as videoController from "../controllers/video.controller";

const router = Router();

router.post("/videos", videoController.createVideo);

router.put("/videos/:id", videoController.editVideo);

router.delete("/videos/:id", videoController.deleteVideo);

router.get("/videos", videoController.getVideos);

router.get("/videos/:id", videoController.getVideo);

export default router;
