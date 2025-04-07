// BACK/app.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const hallRoutes = require('./routes/hallRoutes');
const seatingRoutes = require('./routes/seatingRoutes');
const reportRoutes = require('./routes/reportRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api', authRoutes);
app.use('/api', uploadRoutes);
app.use('/api', hallRoutes);
app.use('/api', seatingRoutes);
app.use('/api', reportRoutes);

// Test DB connection
db.getConnection((err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
    } else {
        console.log('✅ Connected to MySQL Database');
    }
});

module.exports = app;
