import { RequestHandler } from "express";
import Video from "../models/Video";

export const createVideo: RequestHandler = (req, res) => {
  const video = new Video(req.body);
  video.save();
  res.json("Creating a video");
};

export const editVideo: RequestHandler = (_req, res) =>
  res.json("Updating a video");

export const deleteVideo: RequestHandler = (_req, res) =>
  res.json("Deleting a video");

export const getVideos: RequestHandler = (_req, res) =>
  res.json("getting videos");

export const getVideo: RequestHandler = (_req, res) =>
  res.json("getting a video");
