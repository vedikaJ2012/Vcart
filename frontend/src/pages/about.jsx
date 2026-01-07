import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/assets';

const about = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.aboutImg} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Our mission at VCart is to redefine your online shopping experience by offering a curated selection of high-quality products that blend style, innovation, and value. We believe in the power of a well-chosen item to transform your day-to-day life, whether it’s a statement piece for your wardrobe or a clever gadget for your home. Every product in our collection is hand-picked to ensure it meets our rigorous standards of quality and design, guaranteeing you a seamless and satisfying shopping journey from the first click to the final delivery.</p>
          <p>Founded by a team of dedicated enthusiasts, VCart is more than just an e-commerce platform; it's a community built on trust and a shared passion for exceptional goods. We are committed to transparency, outstanding customer service, and providing detailed information about all our offerings. Our goal is to create a reliable destination where you feel confident in every purchase. We continuously strive to improve our services and expand our catalog based on your feedback, ensuring we remain your go-to source for all your needs.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To deliver exceptional products directly to your door, offering a curated selection that saves you time and energy on endless scrolling"</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Quality is the result of a carefully constructed cultural environment.</p>
        </div>
        <div className='border px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Satisfaction Guaranteed: Love it or your money back.</p>
        </div>
        <div className='border px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>It involves actively listening to customers to understand their concerns or requirements and then providing prompt and effective solutions tailored to their individual needs.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default about