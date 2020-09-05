const Facility = require("../models/Facility");

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.getFacilities = async (req, res, next) => {
  try {
    const facilities = await Facility.find();

    return res.status(200).json({
      success: true,
      count: facilities.length,
      data: facilities,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Add transaction
// @route   POST /api/v1/transactions
// @access  Public
exports.addFacility = async (req, res, next) => {
  try {
    const {
      name,
      website,
      phone,
      address,
      description,
      type,
      rating,
    } = req.body;

    const facility = await Facility.create(req.body);

    return res.status(201).json({
      success: true,
      data: facility,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc    Delete a transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteFacility = async (req, res, next) => {
  res.send("DELETE facility");
};
