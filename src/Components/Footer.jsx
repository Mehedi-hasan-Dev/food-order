import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div className='flex flex-col items-center bg-[#323232] text-[#d9d9d9] gap-5 py-5 px-[8vw] pt-20 mt-7'>
        <div className="w-full grid md:grid-cols-[2fr_1fr_1fr] gap20 space-y-10 md:space-y-0">
            <div className="flex flex-col items-start gap-5"><img src={assets.logo} />

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis nemo repudiandae aspernatur, ex totam fugiat magnam! Vel sit incidunt reiciendis.</p>

            <div className=" flex gap-3 ">
                <img className='cursor-pointer' src={assets.facebook_icon} alt="" /><img className='cursor-pointer' src={assets.twitter_icon} alt="" /><img className='cursor-pointer' src={assets.linkedin_icon} alt="" />
            </div>
            </div>


            <div className="">
                <h2 className='text-white text-2xl'>Company</h2>
                <ul className='space-y-2 mt-4'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About Us</li>
                    <li className='cursor-pointer'>Delovery</li>
                    <li className='cursor-pointer'>privacy Policy</li>
                </ul>
            </div>
            <div className="">
                <h2 className='text-white text-2xl'>GET IN TOUCH</h2>
                <ul className='space-y-2 mt-3'><li className='cursor-pointer'>+045454125233</li>
                <li className='cursor-pointer'>contact@tomato.com</li></ul>
            </div>
        </div>
        <hr className='border-[1px] border-gray-600 w-full mt-5'  />
        <p>Copyright</p>
      
    </div>
  )
}

export default Footer
