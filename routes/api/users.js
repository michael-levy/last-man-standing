const express = require("express");
const router = express.Router();

// Item model
const User = require("../../models/User");

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get("/", (req, res) => {
  User.find().then((items) => res.json(items));
});

// @route   POST api/users
// @desc    Create a user
// @access  Public
router.post("/", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    teams: req.body.teams,
  });

  newUser
    .save()
    .then((user) => res.json(user))
    .catch((err) => err);
});

// @route   DELETE api/users/:id
// @desc    Delete A User
// @access  Public
router.delete("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
