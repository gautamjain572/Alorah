import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray--600'>
          <p>Lab-grown diamonds are akin to test tube babies, cultivated from a single diamond seed under the same heat and pressure conditions found in the Earth’s crust. They are environmentally friendly, as they do not involve destructive mining practices. Free from the stigma associated with blood diamonds, lab-grown diamonds have gained global acceptance. Notably, they are more uniform and less expensive than natural diamonds. While naturally mined diamonds take millions of years to form beneath the Earth’s surface, lab-grown diamonds can be produced in a laboratory within a few weeks.</p>
          <p>Replicating the precision of natural diamonds in lab-grown diamonds has taken nearly 60 years of dedicated effort. While natural diamonds form over billions of years deep within the Earth, lab-grown diamonds can achieve the highest quality within just 1-2 months. As technology advances and more players enter the lab-grown diamond market.</p>
        </div>
      </div>
      <div className='flex flex-col justify-center gap-3 text-gray--600'>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission at Alorah is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
      </div>
      <div className='text-2xl py-4 mt-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About