// BACK/controllers/authController.js
const admin = {
    username: 'admin',
    password: 'admin123' // Use environment variables or hashing in production
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "admin") {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
};
