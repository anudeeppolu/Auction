// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/CreateAuction.css'

// const CreateAuction = () => {
//   const [itemName, setItemName] = useState('');
//   const [description, setDescription] = useState('');
//   const [startingBid, setStartingBid] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token'); // Get token from local storage

//     // Validate inputs
//     if (!itemName || !description || !startingBid || !endDate) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/api/auctions/create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`, // Include token in headers
//         },
//         body: JSON.stringify({
//           itemName,
//           description,
//           startingBid: parseFloat(startingBid),
//           endDate,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to create auction. Please try again.');
//       }

//       await response.json(); // Optionally handle the response
//       navigate('/'); // Redirect to auction list after successful creation
//     } catch (err) {
//       setError(err.message);
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <h2>Create Auction</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Item Name"
//           value={itemName}
//           onChange={(e) => setItemName(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Starting Bid"
//           value={startingBid}
//           onChange={(e) => setStartingBid(e.target.value)}
//           required
//         />
//         <input
//           type="datetime-local"
//           placeholder="End Date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           required
//         />
//         <button type="submit">Create Auction</button>
//       </form>
//     </div>
//   );
// };

// export default CreateAuction;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateAuction.css';

const CreateAuction = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [startingBid, setStartingBid] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!itemName || !description || !startingBid || !endDate) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auctions/create', {
        method: 'POST',
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
        throw new Error('Failed to create auction. Please try again.');
      }

      await response.json();
      navigate('/'); // Redirect to auction list after successful creation
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Create Auction</h2>
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
        <button type="submit">Create Auction</button>
      </form>
    </div>
  );
};

export default CreateAuction;
