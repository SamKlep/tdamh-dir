const express = require("express");
const router = express.Router();
const {
  getFacilities,
  addFacility,
  deleteFacility,
} = require("../controllers/facilities");

router.route("/").get(getFacilities).post(addFacility);

router.route("/:id").delete(deleteFacility);

module.exports = router;
