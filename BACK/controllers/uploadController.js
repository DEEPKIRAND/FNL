// BACK/controllers/uploadController.js
const XLSX = require('xlsx');
const db = require('../config/db');
const fs = require('fs');

exports.uploadStudents = async (req, res) => {
    try {
        const files = req.files;

        for (const file of files) {
            const workbook = XLSX.readFile(file.path);
            const sheetName = workbook.SheetNames[0];
            const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

            for (const student of data) {
                await db.execute(
                    `INSERT INTO students (name, student_id, class_name, subject)
                     VALUES (?, ?, ?, ?)`,
                    [student.name, student.student_id, student.class, student.subject]
                );
            }

            fs.unlinkSync(file.path); // Delete after processing
        }

        res.json({ success: true, message: 'Data uploaded and saved' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Upload failed' });
    }
};
