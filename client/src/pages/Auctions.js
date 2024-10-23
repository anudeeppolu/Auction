import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuctionList from '../components/AuctionList';
import CreateAuction from '../components/CreateAuction';

const Auctions = () => {
  const [auctions, setAuctions] = useState([]);
  const [showCreateAuction, setShowCreateAuction] = useState(false);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auctions');
        setAuctions(response.data);
      } catch (error) {
        console.error('Error fetching auctions:', error);
      }
    };

    fetchAuctions();
  }, []);

  const deleteAuction = async (id) => {
    const token = localStorage.getItem('token');
    try {
      // Send DELETE request to the server
      await axios.delete(`http://localhost:5000/api/auctions/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Update state to remove the deleted auction
      setAuctions((prev) => prev.filter((auction) => auction._id !== id));
    } catch (error) {
      console.error('Error deleting auction:', error);
    }
  };

  const toggleCreateAuction = () => {
    setShowCreateAuction((prev) => !prev); // Toggle the visibility of the CreateAuction component
  };

  return (
    <div>
      <h1>All Auctions</h1>
      {/* Pass the auctions and deleteAuction function to AuctionList */}
      <AuctionList auctions={auctions} onDelete={deleteAuction} />
      
      {/* Button to toggle CreateAuction visibility */}
      <button onClick={toggleCreateAuction}>
        {showCreateAuction ? 'Cancel' : 'Create Auction'}
      </button>

      {/* Show CreateAuction component conditionally */}
      {showCreateAuction && <CreateAuction />}
    </div>
  );
};

export default Auctions;
