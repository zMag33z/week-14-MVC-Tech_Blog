const loginFormHandler = async (e) => {
  e.preventDefault();

  const userLogin = document.querySelector('#user-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (userLogin && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ userLogin, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    }
     else {
      alert('Failed to log in.');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);