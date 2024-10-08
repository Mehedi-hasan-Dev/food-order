import React, { useContext } from 'react'
import { StoreContext } from './StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {

    const { food_list } = useContext(StoreContext)

  return (
    <div className='container mt-8 '>
      <h2 className='text-3xl font-semibold mb-7'>Top dishes near you</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-7">
        {food_list.map((item,index)=>{
          if (category==='All' || category===item.category) {
            
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
         
          }


            
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
