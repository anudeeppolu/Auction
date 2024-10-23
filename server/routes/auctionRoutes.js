const express = require('express');
const {
  createAuction,
  getAuctions,
  getAuctionById,
  updateAuction,
  deleteAuction,
  getUserAuctions,
} = require('../controllers/auctionController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Create a new auction
router.post('/create', protect, createAuction);

// Get all auctions
router.get('/', getAuctions);

// Get a single auction by ID
router.get('/:id', getAuctionById);

// Update auction by ID
router.put('/edit/:id', protect, updateAuction);

// Delete auction by ID
router.delete('/delete/:id', protect, deleteAuction);

// Get auctions created by the logged-in user
router.get('/my-auctions', protect, getUserAuctions);

module.exports = router;
