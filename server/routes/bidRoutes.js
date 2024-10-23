const express = require('express');
const { placeBid, getBidHistory } = require('../controllers/bidController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/:auctionId', protect, placeBid);
router.get('/:auctionId/history', protect, getBidHistory);

module.exports = router;
