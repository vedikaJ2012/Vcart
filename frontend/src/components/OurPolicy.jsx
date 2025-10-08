import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs md:text-base text-gray-700'>
      <div>
      <img src={assets.exchange} alt='' className='w-12 m-auto mb-5'></img>
      <p className='font-semibold'>Easy Exchange Policy</p>
      <p className='text-gray-400'>We Offer Hassle Free Exchange Policy</p>
      </div>

      <div>
      <img src={assets.quality} alt='' className='w-12 m-auto mb-5'></img>
      <p className='font-semibold'>7 Dyas Return Policy</p>
      <p className='text-gray-400'>We Offer 7 Days Free Return Policy</p>
      </div>

      <div>
      <img src={assets.support} alt='' className='w-12 m-auto mb-5'></img>
      <p className='font-semibold'>Best Customer Support</p>
      <p className='text-gray-400'>We Provide 24/7 Customer Support</p>
      </div>
    </div>
  )
}

export default OurPolicy