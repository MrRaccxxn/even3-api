import { Router } from "express";
import * as videoController from "../controllers/video.controller";

const videoRouter = Router();

videoRouter.get("/", videoController.getVideos);

videoRouter.post("/", videoController.createVideo);

videoRouter.put("/:id", videoController.editVideo);

videoRouter.delete("/:id", videoController.deleteVideo);

videoRouter.get("/:id", videoController.getVideo);

export default videoRouter;
