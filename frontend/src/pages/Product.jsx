import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProduct from '../components/RelatedProduct';
import StarRating from '../components/StarRating';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [toggle, setToggle] = useState(1)

  const updateToggle = (id) => {
    setToggle(id)
  }

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }
  
  useEffect(() => {
    fetchProductData();
  }, [productId,products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product data  */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* product images  */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full '>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
        {/* product info  */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className='w-3 5' />
            <img src={assets.star_icon} alt="" className='w-3 5' />
            <img src={assets.star_icon} alt="" className='w-3 5' />
            <img src={assets.star_icon} alt="" className='w-3 5' />
            <img src={assets.star_icon} alt="" className='w-3 5' />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Shape</p>
            <div className='flex gap-2 '>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`border rounded-full py-2 px-4 bg-gray-100 ${item === size ? 'border-[#dc9e41]' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product.</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* description and review section  */}
      <div className='mt-20'>
        <div className='flex'>
          <p onClick={() => updateToggle(1)} className={`border px-5 py-3 text-sm cursor-pointer hover:text-gray-400 ${toggle === 1 ? 'font-bold' : ''}`} >Description</p>
          <p onClick={() => updateToggle(2)} className={`border px-5 py-3 text-sm cursor-pointer hover:text-gray-400 ${toggle === 2 ? 'font-bold' : ''}`}>Reviews(122)</p>
        </div>
        <div className={toggle === 1 ? '' : 'hidden'}>
          <div className='flex flex-col border gap-4 px-6 py-6 text-sm text-gray-500'>
            <p>Lab-grown diamonds are akin to test tube babies, cultivated from a single diamond seed under the same heat and pressure conditions found in the Earth’s crust. They are environmentally friendly, as they do not involve destructive mining practices. Free from the stigma associated with blood diamonds, lab-grown diamonds have gained global acceptance.</p>
            <p>Notably, they are more uniform and less expensive than natural diamonds. While naturally mined diamonds take millions of years to form beneath the Earth’s surface, lab-grown diamonds can be produced in a laboratory within a few weeks.</p>
          </div>
        </div>
        <div className={toggle === 2 ? '' : 'hidden'}>
          <div className='flex flex-col border gap-4 px-6 py-6 text-sm text-gray-500'>
            <p>Lab-grown diamonds are akin to test tube babies, cultivated from a single diamond seed under the same heat and pressure conditions found in the Earth’s crust. They are environmentally friendly, as they do not involve destructive mining practices. Free from the stigma associated with blood diamonds, lab-grown diamonds have gained global acceptance.</p>
          </div>
        </div>
      </div>
      <StarRating productId={productData._id} productReview={productData.ratings} />
      {/* related product  */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product