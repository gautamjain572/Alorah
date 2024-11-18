import React, { useState, useContext, useEffect } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";
import axios from 'axios';

const StarRating = ({productId , productReview}) => {
  const { user } = useContext(ShopContext);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [description, setDescription] = useState("");

  const token = localStorage.getItem('token');
  const backendUrl = import.meta.env.VITE_BACKEND_URL 
  const id = user._id

  const submitReview = async (star, des) => {
    if (!star) {
      toast.error("Please Rate us Betwwen 1 to 5");
      return;
    }
    if (!des) {
      toast.error("Please Give Us a Review");
      return;
    }
      setRating(null);
      setDescription("");


      if (token) {
        try {
            await axios.post(backendUrl + '/api/addreview/review',{comment:des,rating:star,userId:id,productId})
        } catch (error) {
            console.log(error);
            toast.error(error.message)  
        }
    }
  };

  return (
    <>
      <div className="mt-8">
        <p className="p-3">Write a review :</p>
        <div className="border p-3">
          <div className="w-full flex gap-4 items-center">
            <div className="my-2 flex justify-center items-center w-1/5">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                      hidden
                    />
                    <img
                      className="cursor-pointer transition-shadow"
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                      src={
                        ratingValue <= (rating || hover)
                          ? `${assets.star_icon}`
                          : `${assets.star_dull_icon}`
                      }
                      alt=""
                    />
                  </label>
                );
              })}
            </div>
            <div className="w-3/5 pt-2">
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="w-full border-2 border-gray-500"
                name="description"
              ></textarea>
            </div>
            <div className="w-1/5">
              <button
                onClick={() => submitReview(rating, description)}
                className="ml-10 bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p>Customer Review :</p>
        <hr />
        <div className="mt-4 flex flex-wrap gap-3">
          {productReview.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 max-w-[280px] border shadow-lg rounded px-6 py-6 text-center"
            >
              <h2 className="text-xl text-gray-700 font-medium">{item.comment}</h2>
              <p className="text-gray-500 mb-4 text-sm">{item.date}</p>
              <div className="flex justify-center gap-1 text-red-500 mb-4">
                {Array.from({ length: item.rating }, (item, index) => (
                  <img
                    className="w-5"
                    key={index}
                    src={assets.star_icon}
                    alt=""
                  />
                ))}
              </div>
              <p className="text-gray-600">{item.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StarRating;
