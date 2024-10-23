const Auction = require('../models/Auction');
const Bid = require('../models/Bid');

// Place a bid
exports.placeBid = async (req, res) => {
  const auctionId = req.params.auctionId;
  const bidAmount = req.body.bidAmount; // Ensure this is sent in the request body
  const userId = req.user.id;

  try {
    const auction = await Auction.findById(auctionId);

    if (!auction || auction.isClosed) {
      return res.status(400).json({ error: 'Auction is closed or not found' });
    }

    if (bidAmount <= auction.currentBid) {
      return res.status(400).json({ error: 'Bid must be higher than current bid' });
    }

    auction.currentBid = bidAmount;
    auction.currentBidder = userId;

    await auction.save();

    const bid = await Bid.create({
      auction: auctionId,
      bidder: userId,
      bidAmount,
    });

    res.status(201).json(bid);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get bid history for an auction
exports.getBidHistory = async (req, res) => {
  try {
    const bids = await Bid.find({ auction: req.params.auctionId })
      .populate('bidder', 'username') // Populate user information
      .sort({ timestamp: -1 }); // Sort bids by latest first
    res.status(200).json(bids);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
