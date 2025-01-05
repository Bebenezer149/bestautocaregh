const express = require("express");

const router = express.Router();
const bookingsModel = require("../Models/bookingsModel");

router.post("/addBookings", async (req, res) => {
  const { user_name, phone } = req.body;
  try {
    const makeBooking = await bookingsModel.create({ user_name, phone });
    res.status(200).json(makeBooking);
  } catch (err) {
    res.status(400).json({ err: "Couldn't add Bookings", reason: err });
  }
});

router.get("/getBookings", async (req, res) => {
  try {
    const getBookings = await bookingsModel.find({createdAt:-1});
    res.status(200).json(getBookings);
  } catch (err) {
    res.status(400).json({ err: "Couldn't fetch Bookings ", reason: err });
  }
});

router.get("/getBookings/:id", async (req, res) => {
 
  try {
    const getBookings = await bookingsModel.findById(req.params.id);
    res.json(getBookings);
  } catch (error) {
    res.status(400).json({ mssg: "Couldn't fetch user", reason: error });
  }
});

module.exports = router;
