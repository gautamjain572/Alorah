import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
//import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const data = [
    {
        name: `OUR BESTSELLERS`,
        lname: `Latest Arrivals`,
        fname: `SHOP NOW`,
        img: `${assets.b1}`
    },
    {
        name: `OUR BESTSELLERS`,
        lname: `Latest Arrivals`,
        fname: `SHOP NOW`,
        img: `${assets.b2}`
    },
    {
        name: `OUR BESTSELLERS`,
        lname: `Latest Arrivals`,
        fname: `SHOP NOW`,
        img: `${assets.b3}`
    }
]

const Hero = () => {

    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     autoplay: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };
    return (
        <>
            <div className='inline-flex flex-col sm:flex-row border border-gray-400 mt-10'>
                {/* hero right side */}
                <img className='w-full sm:w-1/2 ' src={assets.hero_img} alt="" />
                {/* hero left side */}
                <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                    <div className='text-[#414141]'>
                        <div className='flex items-center gap-2'>
                            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                            <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                        </div>
                        <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                        <div className='flex items-center gap-2'>
                            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                        </div>
                    </div>
                </div>
                {/* <div className='mt-10 ml-1'>
                    <img src={d.img} alt="" />
                </div> */}
            </div>
        </>
    )
}

export default Hero