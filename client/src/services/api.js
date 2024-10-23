// import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL;

// // Login User
// export const loginUser = async (credentials) => {
//   try {
//     const response = await axios.post(`${API_URL}/auth/login`, credentials);
//     return response.data; // Return the token or user data
//   } catch (error) {
//     throw new Error(error.response?.data?.error || 'Login failed');
//   }
// };

// // Register User
// export const registerUser = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/auth/register`, userData);
//     return response.data; // Return the token or user data
//   } catch (error) {
//     throw new Error(error.response?.data?.error || 'Registration failed');
//   }
// };

// // Fetch Auctions
// export const fetchAuctions = async () => {
//   const response = await axios.get(`${API_URL}/auctions`);
//   return response.data;
// };

// // Fetch Auction by ID
// export const fetchAuctionById = async (id) => {
//   const response = await axios.get(`${API_URL}/auctions/${id}`);
//   return response.data;
// };

// // Place Bid
// export const placeBid = async (id, bid) => {
//   const response = await axios.post(`${API_URL}/auctions/${id}/bids`, bid);
//   return response.data;
// };

// // Get User from Local Storage
// export const getUserFromLocalStorage = () => {
//   const user = localStorage.getItem('user');
//   return user ? JSON.parse(user) : null;
// };

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Login User
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data; // Return the token or user data
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Login failed');
  }
};

// Register User
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data; // Return the token or user data
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Registration failed');
  }
};

// Fetch Auctions
export const fetchAuctions = async () => {
  const response = await axios.get(`${API_URL}/auctions`);
  return response.data;
};

// Fetch Auction by ID
export const fetchAuctionById = async (id) => {
  const response = await axios.get(`${API_URL}/auctions/${id}`);
  return response.data;
};

// Place Bid
export const placeBid = async (auctionId, bid) => {
    const response = await axios.post(`${API_URL}/bids/${auctionId}`, bid); // Updated URL format
    return response.data;
  };

// Get User from Local Storage
export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};
