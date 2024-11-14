import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    comment: {type:String, required:true},
    rating: {type:Number, required:true},
    userId: {type:mongoose.Schema.ObjectId, ref:"user", required:true},
    productId: {type:mongoose.Schema.ObjectId, ref:"product", required:true},
    date: {type:Number, required:true},
})

const reviewModel = mongoose.model.review || mongoose.model("review",reviewSchema)

export default reviewModel;