const Auction = require('../models/Auction');

// Create auction
exports.createAuction = async (req, res) => {
  const { itemName, description, startingBid, endDate } = req.body;

  try {
    const auction = await Auction.create({
      itemName,
      description,
      startingBid,
      currentBid: startingBid, // Set the current bid to the starting bid
      endDate,
      userId: req.user.id, // Associate the auction with the user who created it
    });
    res.status(201).json(auction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all auctions
exports.getAuctions = async (req, res) => {
  try {
    const auctions = await Auction.find();
    res.status(200).json(auctions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get single auction by ID
exports.getAuctionById = async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id);
    if (!auction) {
      return res.status(404).json({ error: 'Auction not found' });
    }
    res.status(200).json(auction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update auction
exports.updateAuction = async (req, res) => {
  try {
    const updatedAuction = await Auction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAuction) {
      return res.status(404).json({ error: 'Auction not found' });
    }
    res.status(200).json(updatedAuction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete auction
exports.deleteAuction = async (req, res) => {
  try {
    const deletedAuction = await Auction.findByIdAndDelete(req.params.id);
    if (!deletedAuction) {
      return res.status(404).json({ error: 'Auction not found' });
    }
    res.status(204).send(); // No content response for successful deletion
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserAuctions = async (req, res) => {
    console.log('User ID:', req.user.id); // Log user ID
    try {
      const auctions = await Auction.find({ userId: req.user.id });
      res.status(200).json(auctions);
    } catch (error) {
      console.error('Error fetching user auctions:', error.message);
      res.status(400).json({ error: error.message });
    }
  };