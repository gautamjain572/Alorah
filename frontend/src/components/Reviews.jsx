import React, { useEffect, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import Title from './Title';

const Reviews = () => {
    const data = [
        {
            name: 'Shurti Sharma',
            date: '04 July 2023',
            img: `${assets.ri}`,
            rating: 5,
            review: `I recently purchased a lab-made diamond engagement ring, and I couldn't be happier. The clarity and brilliance are stunning.`
        },
        {
            name: 'Sakshi Dubey',
            date: '7 August 2023',
            img: `${assets.ri1}`,
            rating: 4,
            review: `The lab-made diamond I bought for my wife’s birthday was beautiful and sparkled just like a natural diamond. `
        },
        {
            name: 'Shristi Porus',
            date: '14 November 2023',
            img: `${assets.ri2}`,
            rating: 5,
            review: `These diamonds are a game-changer. I was skeptical at first, but after seeing a lab-made diamond in person.`
        },
        {
            name: 'Harsha',
            date: '22 November 2023',
            img: `${assets.ri3}`,
            rating: 5,
            review: `I recently purchased a lab-made diamond engagement ring, and I couldn't be happier. The clarityare stunning.`
        },
        {
            name: 'Shurti Sharma',
            date: '04 July 2023',
            img: `${assets.ri}`,
            rating: 5,
            review: `I recently purchased a lab-made diamond engagement ring, and I couldn't be happier. The clarity and brilliance are stunning.`
        },
        {
            name: 'Shurti Sharma',
            date: '04 July 2023',
            img: `${assets.ri}`,
            rating: 5,
            review: `I recently purchased a lab-made diamond engagement ring, and I couldn't be happier. The clarity and brilliance are stunning.`
        },
        {
            name: 'Shurti Sharma',
            date: '04 July 2023',
            img: `${assets.ri}`,
            rating: 5,
            review: `I recently purchased a lab-made diamond engagement ring, and I couldn't be happier. The clarity and brilliance are stunning.`
        },
    ]

    const [currIndex, setCurrIndex] = useState(0);
    const [cardsShow, setCardsShow] = useState(1);

    const next = () => {
        setCurrIndex((prevIndex) => (prevIndex + 1) % data.length)
    }
    const prev = () => {
        setCurrIndex((prevIndex) => prevIndex === 0 ? data.length - 1 : prevIndex -1 )
    }
    useEffect(() => {
        const updateCards = () => {
            if (window.innerWidth >= 1024) {
                setCardsShow(data.length)
            }
            else{
                setCardsShow(1)
            }
        }
        updateCards();
        window.addEventListener('resize' , updateCards);
        return () => window.removeEventListener('resize' , updateCards);
    },[])

    return (
        <div className='w-full m-auto mb-20'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'Customer'} text2={'Testimonilas'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lab diamonds are created in a lab that exposes a diamond seed to the same
                </p>
            </div>
            <div className='flex justify-end items-center mb-8'>
                <button onClick={prev} className='p-3 bg-gray-200 rounded mr-2'>
                    <img src={assets.left} alt="" />
                </button>
                <button onClick={next} className='p-3 bg-gray-200 rounded mr-2'>
                    <img src={assets.right} alt="" />
                </button>
            </div>
            <div className='overflow-hidden'>
                <div className='flex gap-6 transition-transform duration-500 ease-in-out'
                 style={{transform: `translateX(-${(currIndex * 100) / cardsShow}%)`}}
                >
                    {
                        data.map((item, index) => (
                            <div className='flex-shrink-0 max-w-[320px] border shadow-lg rounded px-8 py-12 text-center' key={index}>
                                <img className='w-20 h-20 rounded-full mx-auto mb-4 object-cover' src={item.img} alt="" />
                                <h2 className='text-xl text-gray-700 font-medium'>{item.name}</h2>
                                <p className='text-gray-500 mb-4 text-sm'>{item.date}</p>
                                <div className='flex justify-center gap-1 text-red-500 mb-4'>
                                    {Array.from({ length: item.rating }, (item, index) => (
                                        <img key={index} src={assets.star_icon} alt="" />
                                    ))}
                                </div>
                                <p className='text-gray-600'>{item.review}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Reviews