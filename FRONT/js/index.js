// FRONT/js/index.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            const result = await response.json();

            if (result.success) {
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid username or password.");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("An error occurred while logging in.");
        }
    });
});
