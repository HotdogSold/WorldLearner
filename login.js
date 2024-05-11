<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login and Register</title>
</head>
<body>

    <h2>Login</h2>
    <form id="loginForm">
        <label for="username">Username:</label><br>
        <input type="text" id="loginUsername" name="username" required><br>
        <label for="password">Password:</label><br>
        <input type="password" id="loginPassword" name="password" required><br><br>
        <button type="submit">Login</button>
    </form>

    <h2>Register</h2>
    <form id="registerForm">
        <label for="username">Username:</label><br>
        <input type="text" id="registerUsername" name="username" required><br>
        <label for="password">Password:</label><br>
        <input type="password" id="registerPassword" name="password" required><br><br>
        <button type="submit">Register</button>
    </form>

    <script>

           document.addEventListener('DOMContentLoaded', (event) => {
    // This code runs when the DOM is ready, i.e. when the document has been parsed

    // Add this new event listener for your login/register button
           document.getElementById("login-btn").addEventListener("click", function() {
        // Code to display the login form
          document.getElementById("loginForm").style.display = 'block';
          document.getElementById("registerForm").style.display = 'none';
    });

    // Existing login form event listener
          document.getElementById("loginForm").addEventListener("submit", function(event) {
        // ... existing code ...
    });

    // Existing register form event listener
          document.getElementById("registerForm").addEventListener("submit", function(event) {
        // ... existing code ...
    });
});
    
        // Login
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

        // Register
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
    </script>

</body>
  </html>
