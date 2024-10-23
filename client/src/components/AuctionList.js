import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuctionList.css'; // External CSS file for styles

const AuctionList = ({ auctions }) => {
  return (
    <div className="auction-list">
      {auctions.map((auction) => (
        <div key={auction._id} className="auction-item">
          <img src={auction.imageUrl} alt={auction.itemName} className="auction-image" />
          <div className="auction-details">
            <h3 className="item-name">{auction.itemName}</h3>
            <p className="minimum-bid">Minimum Bid: ${auction.minimumBid}</p>
            <p className="current-bid">Current Bid: ${auction.currentBid}</p>
            <p className="time-left">Ends in {auction.timeLeft}</p>

            {/* Conditionally render "Live" tag */}
            {auction.isLive && <span className="live-tag">Live</span>}

            <Link to={`/auctions/${auction._id}`} className="bid-now-button">
              Bid now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuctionList;
