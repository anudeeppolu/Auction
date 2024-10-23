import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BidForm from '../components/BidForm';
import BidHistory from '../components/BidHistory';
import '../styles/AuctionDetail.css';

const AuctionDetails = () => {
  const { id } = useParams();
  const [auction, setAuction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchAuctionDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/auctions/${id}`);
        setAuction(response.data);
      } catch (error) {
        console.error('Error fetching auction details:', error);
      }
    };

    fetchAuctionDetails();
  }, [id]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!auction) {
    return <p>Loading...</p>;
  }

  return (
    <div className="auction-details">
      <h2>{auction.itemName}</h2>
      <img src={auction.imageUrl} alt={auction.itemName} />

      <div className="left-section">
        <p>Minimum Bid: ${auction.minimumBid}</p>
        <p>Current Bid: ${auction.currentBid}</p>
        <p>Ends in: {auction.endTime}</p>
      </div>

      <div className="middle-section">
        <p>{auction.description}</p>
      </div>

      <div className="right-section">
        <div className="bid-history">
          <BidHistory auctionId={id} />
        </div>
        <button onClick={openModal} className="bid-now-btn">Bid Now</button>
      </div>

      {/* Modal for bidding */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Place Your Bid</h2>
            <BidForm auctionId={auction._id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AuctionDetails;
