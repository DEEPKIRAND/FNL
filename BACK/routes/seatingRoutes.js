// BACK/routes/seatingRoutes.js
const express = require('express');
const router = express.Router();
const seatingController = require('../controllers/seatingController');
const auth = require('../middleware/auth');

router.get('/seating', auth, seatingController.getSeatingArrangement);

module.exports = router;
