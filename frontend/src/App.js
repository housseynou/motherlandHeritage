import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductDetails from './components/pages/ProductDeatails';
import Home from './components/pages/Home'
//import Hero from './components/Hero';
import AllProducts from './components/pages/AllProducts'
import Cart from './components/pages/Cart'
import { CartProvider } from './components/CartStatus'

function App() {
  return (
    <>
    <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' exact Component={Home}></Route>
            <Route path='/Products' exact Component={AllProducts}></Route>
            <Route path='/Products/:id' exact component={ProductDetails}></Route>
            <Route path='/Cart' exact Component={Cart}></Route>
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
