import mongoose from 'mongoose';
import productModel from "../models/productModel.js";
import reviewModel from "../models/reviewModel.js";

const addReview = async (req, res) => {
    try {
        const { comment, rating, userId, productId } = req.body;
        if (!comment || !rating || !productId || !userId) {
            res.json({ success: false, message: "All feild are required" })
        }
        let existingproduct;
        try {
            existingproduct = await productModel.findById(productId)
        } catch (error) {
            return console.log(error);
        }

        const existingReview = await reviewModel.findOne({ productId, userId })
        if (existingReview) {
            existingReview.comment = comment;
            existingReview.rating = rating;
            existingReview.date = Date.now()
            await existingReview.save();
        }
        else {
            const newReview = new reviewModel({
                comment, rating, productId, userId, date: Date.now()
            })
            const session = await mongoose.startSession();
            session.startTransaction();
            existingproduct.ratings.push(newReview);
            await existingproduct.save({ session });
            await newReview.save({ session })
            await session.commitTransaction();
        }
        const reviews = await reviewModel.find({ productId })
        if (reviews.length > 0) {
            const totalRating = reviews.reduce((acc, reviews) => acc + reviews.rating, 0);
            const avgRating = totalRating / reviews.length;
            const product = await productModel.findById(productId)
            if (product) {
                product.rating = avgRating;
                await product.save();
            }
            else {
                return res.json({ success: false, message: "Product not find" })
            }
        }
        return res.json({ success: true, message: "Review Submit Successfully", reviews: reviews })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

const getReviewCount = async (req, res) => {
    try {
        const totalReviews = await reviewModel.countDcouments({})
        res.json({ success: true, totalReviews })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export { addReview, getReviewCount  }