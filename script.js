function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Here, you can add your authentication logic
    // For simplicity, I'll just check if the username is 'admin' and password is 'password'
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      window.location.href = "https://docs.google.com/spreadsheets/d/1QoBrB1UERiGKCknzDyDFT01tJHPBsoHoFjJnAKXpwro/edit#gid=0"; // Redirect to Google.com
      return false; // Prevent default form submission
    } else {
      alert('Invalid username or password. Please try again.');
      return false; // Prevent default form submission
    }
  }