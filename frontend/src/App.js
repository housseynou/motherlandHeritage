import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
//import Products from './components/Products';
import Home from './components/pages/Home';
//import Hero from './components/Hero';
import AllProducts from './components/pages/AllProducts';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact Component={Home}></Route>
        <Route path='/Products' exact Component={AllProducts}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
