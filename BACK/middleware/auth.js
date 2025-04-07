// BACK/middleware/auth.js

// This is a simple placeholder middleware
// Later you can use JWT or session-based auth here

module.exports = (req, res, next) => {
    // In real scenario, check if user is authenticated
    const isAuthenticated = true; // mock

    if (isAuthenticated) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};
