import express from "express";
import {createShortUrl, redirectOnShortUrl} from "../controllers/shorturl.controller.js";

const shorturlRouter = express.Router();

shorturlRouter.post("/shorten", createShortUrl);
shorturlRouter.get("/:shortId" , redirectOnShortUrl);
export default shorturlRouter;