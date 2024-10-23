import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    const fetchUserAuctions = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:5000/api/auctions/my-auctions', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAuctions(response.data);
      } catch (error) {
        console.error('Error fetching user auctions:', error);
      }
    };

    fetchUserProfile();
    fetchUserAuctions();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <h2>Your Auctions</h2>
      <ul>
        {auctions.length > 0 ? (
          auctions.map((auction) => (
            <li key={auction._id}>
              {auction.itemName} - Current Bid: ${auction.currentBid}
            </li>
          ))
        ) : (
          <p>No auctions found.</p>
        )}
      </ul>
    </div>
  );
};

export default ProfilePage;
