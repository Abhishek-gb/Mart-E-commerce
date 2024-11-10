import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Shop from '../components/Shop';
import Cart from '../components/Cart';

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Shop' element={<Shop />} />
      <Route path='/Cart' element={<Cart/>}/>
    </Routes>
  );
};

export default Routing;
