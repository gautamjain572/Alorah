import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-36 text-sm'>
            <div>
                <img src={assets.logo} alt="" className=' w-28 mb-5' />
                <p className='w-full md:w-2/3 text-gray-600'>
                Indulge in the elegance of diamonds at a fraction of the cost. Enjoy the same stunning beauty and characteristics of mined diamonds at just one-tenth of the price.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91-989-999-8301</li>
                    <li>bd@legendgroup.in</li>
                    <li className='w-[250px]'><strong>Location -</strong> 6,Legend Square,Infocity-II,Sector-33,Gurugram-122003</li>
                </ul>
            </div>
        </div>
        <div >
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Alorah.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer