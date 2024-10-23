import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auctions from './pages/Auctions';
import AuctionDetail from './pages/AuctionDetail';
import Register from './components/Register';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import CreateAuction from './components/CreateAuction';
import EditAuction from './components/EditAuction';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/auctions/:id" element={<AuctionDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateAuction />} />
        <Route path="/profile" element={<UserProfile />} />
       
        <Route path="/auctions/edit/:id" element={<EditAuction />} />
      </Routes>
    </div>
  );
};

export default App;
