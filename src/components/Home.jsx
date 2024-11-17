import React from 'react'
import DiscountProduct from './DiscountProduct'
import Products from './Products'
import ImageTextSlider from './Slider/ImageTextSlider'
import Service from './Service'

const Home = () => {
  return (
    <>
    <ImageTextSlider/>
    <Service/>
    <DiscountProduct/>
    <Products/>
    </>
  )
}

export default Home