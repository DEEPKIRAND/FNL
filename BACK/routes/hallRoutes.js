// BACK/routes/hallRoutes.js
const express = require('express');
const router = express.Router();
const hallController = require('../controllers/hallController');
const auth = require('../middleware/auth');

router.post('/halls', auth, hallController.addHall);

module.exports = router;
