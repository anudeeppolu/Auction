import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditAuction = () => {
  const { id } = useParams();
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [startingBid, setStartingBid] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuction = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch(`http://localhost:5000/api/auctions/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch auction details.');
        }

        const auction = await response.json();
        setItemName(auction.itemName);
        setDescription(auction.description);
        setStartingBid(auction.startingBid);
        setEndDate(auction.endDate);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchAuction();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`http://localhost:5000/api/auctions/edit/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          itemName,
          description,
          startingBid: parseFloat(startingBid),
          endDate,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update auction. Please try again.');
      }

      await response.json();
      navigate('/'); // Redirect to auction list after successful update
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Edit Auction</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Starting Bid"
          value={startingBid}
          onChange={(e) => setStartingBid(e.target.value)}
          required
        />
        <input
          type="datetime-local"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
        <button type="submit">Update Auction</button>
      </form>
    </div>
  );
};

export default EditAuction;
