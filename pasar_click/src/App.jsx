import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Login from './Component/Credential/Login';
import Footer from './Component/Footer';
import SignUp from './Component/Credential/SignUp';

import Chatbot from './Component/Chatbot/Chatbot';
import Search from './Component/Search/Search';
import TrackOrder from './Component/TrackOrder/TrackOrder';
import Order from './Component/Order/Order';
import NotFound from './Component/error/NotFound';
import Home from './Component/home/Home';


function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/*" element={<Home />} />
          <Route path="/home/search" element={<Search />} />
          
          <Route path="/home/chatbot" element={<Chatbot />} />
          <Route path="/home/track-orders" element={<TrackOrder />} />
          <Route path="/home/orders" element={<Order/>}/>
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
