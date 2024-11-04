import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from './Title';

const data = [
    {
        name: 'Shurti Sharma',
        date: '04 July 2023',
        img: `${assets.ri}`,
        review: `I recently purchased a lab-made diamond engagement ring, and I couldn't be happier. The clarity and brilliance are stunning.`
    },
    {
        name: 'Sakshi Dubey',
        date: '7 August 2023',
        img: `${assets.ri1}`,
        review: `The lab-made diamond I bought for my wife’s birthday was beautiful and sparkled just like a natural diamond. `
    },
    {
        name: 'Shristi Porus',
        date: '14 November 2023',
        img: `${assets.ri2}`,
        review: `These diamonds are a game-changer. I was skeptical at first, but after seeing a lab-made diamond in person.`
    },
    {
        name: 'Harsha',
        date: '22 November 2023',
        img: `${assets.ri3}`,
        review: `I recently purchased a lab-made diamond engagement ring, and I couldn't be happier. The clarityare stunning.`
    },
    {
        name: 'Shurti Sharma',
        date: '04 July 2023',
        img: `${assets.ri}`,
        review: `I recently purchased a lab-made diamond engagement ring, and I couldn't be happier. The clarity and brilliance are stunning.`
    },
    {
        name: 'Shurti Sharma',
        date: '04 July 2023',
        img: `${assets.ri}`,
        review: `I recently purchased a lab-made diamond engagement ring, and I couldn't be happier. The clarity and brilliance are stunning.`
    },
    {
        name: 'Shurti Sharma',
        date: '04 July 2023',
        img: `${assets.ri}`,
        review: `I recently purchased a lab-made diamond engagement ring, and I couldn't be happier. The clarity and brilliance are stunning.`
    },
]

const ReviewCard = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='w-full m-auto mb-20'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'OUR'} text2={'REVIEWS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Yes! The world has started accepting & utilizing lab grown diamonds which allows consumers to sell their Lab Grown diamond anywhere in the world.
                </p>
            </div>
            <div className='mx-10'>
                <Slider {...settings}>
                    {data.map((d) => (
                        <div className='bg-white h-[450px] text-black rounded-xl border'>
                            <div className=' h-56 rounded-t-xl bg-[#3B5A5F] flex justify-center items-center'>
                                <img src={d.img} alt="" className='h-32 w-32 rounded-full object-cover' />
                            </div>
                            <div className='flex items-center justify-center gap-1 mt-4'>
                                <img src={assets.star_icon} alt="" className='w-3 5' />
                                <img src={assets.star_icon} alt="" className='w-3 5' />
                                <img src={assets.star_icon} alt="" className='w-3 5' />
                                <img src={assets.star_icon} alt="" className='w-3 5' />
                                <img src={assets.star_icon} alt="" className='w-3 5' />
                            </div>
                            <div className='flex flex-col justify-center items-center gap-2 p-2'>
                                <p className='text-xl font-semibold'>{d.name}</p>
                                <p className='text-justify text-wrap'>{d.review}</p>
                                <button className='bg-[#3B5A5F] text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default ReviewCard