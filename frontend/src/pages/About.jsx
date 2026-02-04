import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const about = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4'>
            <p>Most people follow a tutorial to build a site; I built a platform to solve the "where did I put that receipt?" problem—then I turned it into this. Founded by Goutham A. S., this project began at the intersection of a  logic and a designer’s eye for aesthetics.</p>
            <p>While the "Forever" brand was the starting point, the underlying engine—from the MERN stack integration to the AI-optimized asset pipeline—was engineered to prove that high-fashion retail can have high-performance code. I don't just ship products; I ship clean, maintainable, and scalable architecture.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>To empower our customers by providing an effortless shopping journey, featuring an exceptional and curated selection of products. </p>
            <ul className='list-disc pl-5 flex flex-col gap-2'>
                <li>
                  <span className='font-bold text-gray-800'>Curated Selection:</span> Every item is hand-picked for style and durability (and because the database wouldn't have it any other way).
                </li>
                <li>
                  <span className='font-bold text-gray-800'>Seamless Experience:</span> A fast, responsive interface designed to be smoother than a successful git push.
                </li>
                <li>
                  <span className='font-bold text-gray-800'>Dedicated Support:</span> We’re here to help every step of the way—think of us as your human Stack Overflow for fashion.
                </li>
            </ul>
        </div>
      </div>
      
      <div className='text-xl py-4'>
        <Title text1={'WHY '} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standars</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user friendly interface and hassle-free ordering process, shopping has becom easier</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional customer service:</b>
          <p className='text-gray-600'>Our team of dedicated Professional is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default about
