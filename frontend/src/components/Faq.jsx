import React from 'react'
import Accordation from './Accordation'
import Title from './Title';

const Faq = () => {
    return (
        <>
            <div className='text-center text-3xl py-8'>
                <Title text2={`FAQ's`} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                consumers to sell their Lab Grown diamond anywhere in the world
                </p>
            </div>
            <div className='p-6 bg-gray-200 rounded-lg mb-20'>
                <Accordation title='Are Lab Grown Diamonds Real?' answer='Yes!! Lab Grown Diamonds flaunt the same chemical properties as their Natural counterparts.' />
                <Accordation title='Are Lab Grown Diamonds Real?' answer='Yes!! Lab Grown Diamonds flaunt the same chemical properties as their Natural counterparts.' />
                <Accordation title='Are Lab Grown Diamonds Real?' answer='Yes!! Lab Grown Diamonds flaunt the same chemical properties as their Natural counterparts.' />
            </div>
        </>
    )
}

export default Faq