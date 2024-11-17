import React from 'react'
import Header from './components/Header'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Routing from './Routing/Routing'
import Footer from './components/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageTextSlider from './components/Slider/ImageTextSlider'
import DiscountProduct from './components/DiscountProduct'




const App = () => {
  return (
    <>
    <Header/>
    <Routing/>
    <ImageTextSlider/>
      
    <Footer/>
    </>
  )
}

export default App
