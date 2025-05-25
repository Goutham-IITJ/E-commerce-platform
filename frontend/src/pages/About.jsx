import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
const about = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia facere aliquam minima neque doloribus dolorum eveniet unde, numquam explicabo porro facilis inventore accusamus, totam iste. Atque esse quis sapiente aspernatur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, itaque? Iste labore, nesciunt nobis voluptate voluptas consequatur similique, incidunt hic quidem ut corporis expedita qui animi ipsa a? Vitae, natus.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates quibusdam ea voluptate, sit cumque praesentium et! Perferendis est ipsum cumque quia voluptas delectus optio! Labore dolores voluptatibus dolor fugiat quaerat!</p>
        </div>
      </div>
      
      <div className='text-xl py-4'>
        <Title text1={'WHY '} text2={'CHOOSE US'}/>
      </div>

      <div>
        
      </div>
    </div>
  )
}

export default about
