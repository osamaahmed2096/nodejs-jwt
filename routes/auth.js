const express = require('express');
const router = express.Router();

// Register auth route
router.post('/register', (req, res) => {
  //Register a new user to postgrSQL
});

// Login auth route
router.post('/login', (req, res) => {
  //check for valid jwt and check that user exists using user route
});

module.exports = router;