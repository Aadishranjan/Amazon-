import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Homepage/Home.jsx';
import Profile from './components/profile.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import Login from './components/LoginSignup/Login.jsx';
import Signup from './components/LoginSignup/Signup.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Order from './components/order.jsx';
import CardOrder from './components/CardOrder.jsx';
import Wishlist from './components/wishlist.jsx'
import NotFound from './components/NotFound.jsx';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/order" element={<Order />} />
        <Route path="/card" element={<CardOrder />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
