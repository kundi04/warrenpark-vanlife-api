const Van = require('../models/Van');

// Create a new van
const createVan = async (vanData) => {
  const newVan = new Van(vanData);
  return await newVan.save();
};

// Get a single van by ID
const getVan = async (vanId) => {
  return await Van.findById(vanId);
};

// Get all vans for a user using search or filter criteria
const getVans = async (userId, search, filter) => {
  if (!search && !filter) {
    // Use prefetching algorithm to fetch all vans for the user
    return await Van.find({ userId });
  } else {
    // Apply search and filter criteria
    const query = { userId };
    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }
    if (filter) {
      query.availability = filter;
    }
    return await Van.find(query);
  }
};

// Get all vans uploaded by a host
const getVansForHost = async (hostId) => {
  return await Van.find({ hostId });
};

// Update van info
const updateVan = async (vanId, vanData) => {
  return await Van.findByIdAndUpdate(vanId, vanData, { new: true });
};

// Delete a van by ID
const deleteVan = async (vanId) => {
  return await Van.findByIdAndDelete(vanId);
};

module.exports = {
  createVan,
  getVan,
  getVans,
  getVansForHost,
  updateVan,
  deleteVan,
};