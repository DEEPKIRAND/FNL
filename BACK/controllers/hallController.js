// BACK/controllers/hallController.js
const db = require('../config/db');

exports.addHall = async (req, res) => {
    const { hall_name, department, class_name, total_benches, bench_capacity, rows, columns } = req.body;

    try {
        const [result] = await db.execute(
            `INSERT INTO halls (hall_name, department, class_name, total_benches, bench_capacity, rows, columns)
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [hall_name, department, class_name, total_benches, bench_capacity, rows, columns]
        );
        res.json({ success: true, message: 'Hall added successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Failed to add hall' });
    }
};
