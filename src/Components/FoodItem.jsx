import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { img } from 'framer-motion/client'
import { StoreContext } from './StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

    
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='w-full m-auto rounded-[15px] shadow-md animate-fadeIn duration-100'>
        <div className="w-full relative">
            <img className='rounded-t-2xl w-full object-cover' src= {image}  />
            {
                !cartItems[id]
                ?<img onClick={()=>addToCart(id)} className='w-[35px] absolute bottom-4 right-4 cursor-pointer rounded-full' src={assets.add_icon_white} alt="" />: <div className="absolute bottom-4 right-4 flex items-center gap-2 p-2 rounded-[50px] bg-white">
                    
                    <img className='w-[30px]' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    
                    <img className='w-[30px]' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="p-5">
            <div className="flex justify-between items-center mb-2">
                <p className='text-xl font-medium'>{name}</p>
                <img className='cursor-pointer w-[70px]' src={assets.rating_starts} alt="" />
            </div>
        <p className="text-[#676767] text-xs">
            {description}
        </p>
        <p className="text-[#ff6347] text-xl font-medium my-2">${price}</p>
        </div>
      
    </div>
  )
}

export default FoodItem
