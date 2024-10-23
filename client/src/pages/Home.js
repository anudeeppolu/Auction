// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AuctionList from '../components/AuctionList';

// const Home = () => {
//   const [auctions, setAuctions] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const auctionsPerPage = 5;

//   useEffect(() => {
//     const fetchAuctions = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/auctions'); // API URL
//         setAuctions(response.data);
//       } catch (error) {
//         console.error('Error fetching auctions:', error);
//       }
//     };

//     fetchAuctions();
//   }, []);

//   const filteredAuctions = auctions.filter(auction =>
//     auction.itemName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLastAuction = currentPage * auctionsPerPage;
//   const indexOfFirstAuction = indexOfLastAuction - auctionsPerPage;
//   const currentAuctions = filteredAuctions.slice(indexOfFirstAuction, indexOfLastAuction);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
//   const totalPages = Math.ceil(filteredAuctions.length / auctionsPerPage);

//   return (
//     <div>
//       <h1>Welcome to the Auction App</h1>
//       <input
//         type="text"
//         placeholder="Search auctions..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <AuctionList auctions={currentAuctions} />

//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button key={index + 1} onClick={() => paginate(index + 1)}>
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuctionList from '../components/AuctionList';
import '../styles/App.css';

const Home = () => {
  const [auctions, setAuctions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const auctionsPerPage = 5;

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auctions'); // Mock URL
        setAuctions(response.data);
      } catch (error) {
        console.error('Error fetching auctions:', error);
      }
    };

    fetchAuctions();
  }, []);

  const filteredAuctions = auctions.filter(auction =>
    auction.itemName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastAuction = currentPage * auctionsPerPage;
  const indexOfFirstAuction = indexOfLastAuction - auctionsPerPage;
  const currentAuctions = filteredAuctions.slice(indexOfFirstAuction, indexOfLastAuction);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(filteredAuctions.length / auctionsPerPage);

  return (
    <div className="home-container">
      <h1 className="title">Auction App</h1>
      <input
        type="text"
        placeholder="Search items..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <AuctionList auctions={currentAuctions} />
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
