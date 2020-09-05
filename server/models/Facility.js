const mongoose = require("mongoose");
const FacilitySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [false, "Please add some text"],
  },

  address: {
    street: {
      type: String,
      trim: true,
      required: [false, "Please add some text"],
    },
    city: {
      type: String,
      trim: true,
      required: [false, "Please add some text"],
    },
    state: {
      type: String,
      trim: true,
      required: [false, "Please add some text"],
    },
    zipcode: {
      type: String,
      trim: true,
      required: [false, "Please add some text"],
    },
  },
  phone: {
    type: String,
    trim: true,
    required: [false, "Please add some text"],
  },
  website: {
    type: String,
    trim: true,
    required: [false, "Please add some text"],
  },

  description: {
    type: String,
    trim: true,
    required: [false, "Please add some text"],
  },
  type: {
    type: String,
    trim: true,
    required: [false, "Please add some text"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Facility", FacilitySchema);
