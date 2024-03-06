const form = document.getElementById('registrationForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      alert('Registration successful!');
      form.reset();
    } else {
      const error = await response.text();
      alert('Registration failed: ' + error);
    }
  } catch (err) {
    alert('Registration failed: ' + err.message);
  }
});