// BACK/controllers/reportController.js
const db = require('../config/db');

exports.getReport = async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM seating_report');
        res.json({ success: true, students: rows });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Failed to fetch report' });
    }
};
