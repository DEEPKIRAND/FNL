// BACK/controllers/seatingController.js
const db = require('../config/db');
const { generateSeatingPlan } = require('../utils/seatingAlgo');

exports.getSeatingArrangement = async (req, res) => {
    try {
        const [students] = await db.execute('SELECT * FROM students');
        const [halls] = await db.execute('SELECT * FROM halls');

        const seatingPlan = generateSeatingPlan(students, halls);
        res.json({ success: true, students: seatingPlan });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Error generating seating' });
    }
};
