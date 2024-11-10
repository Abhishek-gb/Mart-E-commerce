import React from 'react'
import Header from './components/Header'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Routing from './Routing/Routing'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Routing/>
    <Footer/>
    </>
  )
}

export default App
