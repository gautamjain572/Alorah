import express from "express";
import { addReview, getReviewCount } from "../controllers/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.post("/review", addReview);
reviewRouter.post("/count", getReviewCount);

export default reviewRouter;
