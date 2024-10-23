import React, { useState } from 'react';
import axios from 'axios';

const BidForm = ({ auctionId }) => {
  const [bidAmount, setBidAmount] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // Assuming user is authenticated and token is stored

    try {
      const response = await axios.post(
        `http://localhost:5000/api/bids/${auctionId}`,
        { bidAmount: parseFloat(bidAmount) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('Bid placed:', response.data);
      setSuccessMessage('Your bid has been placed successfully!');
      setBidAmount(''); // Clear the form after successful bid
      setError(''); // Clear any previous error
    } catch (err) {
      setError(err.response?.data?.error || 'Error placing bid');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter your bid"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          required
          min="0"
        />
        <button type="submit">Place Bid</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default BidForm;
