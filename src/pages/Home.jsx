import React, { useState } from 'react'
import ExploreMenu from '../Components/ExploreMenu'
import FoodDisplay from '../Components/FoodDisplay';
import Hero from '../Components/Hero';

const Home = () => {
  const [category,setCategory] = useState("All");



  return (
    <div>
      <Hero/>
      <ExploreMenu category={category} setCategory ={setCategory}/>
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home
