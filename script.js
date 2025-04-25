// script.js

function redirectTo(url) {
  window.location.href = url;
}

// Set profile name dynamically (optional)
document.addEventListener('DOMContentLoaded', () => {
  const profileName = document.getElementById('profileName');
  // Simulate getting student name from localStorage or server
  profileName.textContent = "John Doe";

  document.getElementById('logoutBtn').addEventListener('click', () => {
    // Clear any stored data if applicable
    // Redirect to login page or homepage
    alert("You have been logged out.");
    window.location.href = "https://example.com/login";
  });
});
