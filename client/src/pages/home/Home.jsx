import React, { useEffect } from 'react'
import NewArrival from './newArrival/NewArrival'
import HeroBody from './hero/HeroBody'
import Carosusel from '../../components/carousel/carouselBody/Carosusel'
import DressStyle from './dressStyle/DressStyle'
import HappyCustomer from './happyCustomer/HappyCustomer'



const Home = () => {
   
  return (
    <div>
       <HeroBody/>
       <NewArrival
        headline="NEW ARRIVALS"
       />
       <NewArrival
        headline="TOP SELLING"
       />
       <DressStyle/>
       <HappyCustomer/>
       
    </div>
  )
}

export default Home
