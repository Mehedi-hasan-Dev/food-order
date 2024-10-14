import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='container mx-auto my-8 font-medium  text-[5vw] text-center'>
      <p>For better experience download <br /> Tomato app</p>
      <div className="flex justify-center gap-5 mt-10">
        <img className='w-[120px] cursor-pointer hover:scale-125 duration-200' src={assets.play_store} alt="" />
        <img className='w-[120px] cursor-pointer hover:scale-125 duration-200' src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
