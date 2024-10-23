import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BidHistory = ({ auctionId }) => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    const fetchBidHistory = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(`http://localhost:5000/api/bids/${auctionId}/history`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBids(response.data);
      } catch (error) {
        console.error('Error fetching bid history:', error);
      }
    };

    fetchBidHistory();
  }, [auctionId]);

  return (
    <div>
      <h3>Bid History</h3>
      <ul>
        {bids.map((bid) => (
          <li key={bid._id}>
            {bid.bidder.username} - ${bid.bidAmount} at {new Date(bid.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BidHistory;
