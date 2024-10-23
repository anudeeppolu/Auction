// import React from 'react';
// import { Link } from 'react-router-dom';

// const AuctionItem = ({ auction }) => {
//   return (
//     <div className="auction-item">
//       <h2>{auction.itemName}</h2>
//       <p>{auction.description}</p>
//       <p>Starting Bid: ${auction.startingBid}</p>
//       <p>Current Bid: ${auction.currentBid}</p>
//       <Link to={`/auctions/${auction._id}`}>View Details</Link>
//     </div>
//   );
// };

// export default AuctionItem;

import React from 'react';
import { Link } from 'react-router-dom';

const AuctionItem = ({ auction }) => {
  return (
    <div className="auction-item">
      <h2>{auction.itemName}</h2>
      <p>{auction.description}</p>
      <p>Starting Bid: ${auction.startingBid}</p>
      <p>Current Bid: ${auction.currentBid}</p>
      <Link to={`/auctions/${auction._id}`}>View Details</Link>
    </div>
  );
};

export default AuctionItem;
