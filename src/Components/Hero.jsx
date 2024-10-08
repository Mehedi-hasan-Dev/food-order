import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='container pt-36 pb-10 my-[30px] mx-auto bg-header object-contain rounded-2xl'>
      <div className='animate-fadeIn  flex flex-col items-start gap-[1.5vw] md:max-w-[50%] px-11'>
        <h2 className='font-medium text-white text-6xl'>
            Order your favourite foods here
        </h2>
        <p className='text-white text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus natus porro quisquam perferendis harum eligendi libero placeat quas mollitia tempora.</p>
        <button className='text-[#747474] border-none font-medium py-[1vw] px-[2.3vw] bg-white text-[13px] rounded-3xl hover:bg-slate-200 duration-150 '>View Menu</button>
      </div>
    </div>
    </div>
  )
}

export default Hero
