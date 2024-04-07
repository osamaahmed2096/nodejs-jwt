const express = require('express');
const router = express.Router();

router.get('/getUser', (req, res) => {
  //Get the user from the DB and need to have a valid JWT token
});

module.exports = router;