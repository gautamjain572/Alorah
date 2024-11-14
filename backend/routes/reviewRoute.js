import express from 'express';
import { addReview, getReviewByUserId, getReviewCount ,getReviewForProduct } from '../controllers/reviewController.js';

const reviewRouter = express.Router();

reviewRouter.post('/review',addReview);
reviewRouter.post('/count',getReviewCount);
reviewRouter.get('/find',getReviewByUserId);
reviewRouter.get('/findv',getReviewForProduct);


export default reviewRouter;