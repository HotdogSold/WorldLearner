document.addEventListener('DOMContentLoaded', (event) => {
    // Event listener for your login/register button
    document.getElementById("login-btn").addEventListener("click", function() {
        // Code to display the login form
        document.getElementById("loginForm").style.display = 'block';
        document.getElementById("registerForm").style.display = 'none';
    });

    // Login form event listener
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var username = document.getElementById("loginUsername").value;
        var password = document.getElementById("loginPassword").value;
        var storedUser = localStorage.getItem(username);
        if (storedUser) {
            var user = JSON.parse(storedUser);
            if (user.password === password) {
                alert("Login successful!");
                // Redirect or do something after successful login
            } else {
                alert("Incorrect password.");
            }
        } else {
            alert("User not found.");
        }
    });

    // Register form event listener
    document.getElementById("registerForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var username = document.getElementById("registerUsername").value;
        var password = document.getElementById("registerPassword").value;
        var storedUser = localStorage.getItem(username);
        if (!storedUser) {
            var user = { username: username, password: password };
            localStorage.setItem(username, JSON.stringify(user));
            alert("Registration successful!");
            // Redirect or do something after successful registration
        } else {
            alert("Username already exists.");
        }
    });
});
