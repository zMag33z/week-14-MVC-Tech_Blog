// Future note:  Add input validators for when browser don't support input requirements.

const signupFormHandler = async (e) => {
    e.preventDefault();
  
    const username = document.querySelector('#user-login').value.trim();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
   

      if (response.ok) {
        if(!alert(`User account created!\n\nWelcome to the Dev Blog ${username}!`)){document.location.reload('/dashboard');}
      } else {
        alert('Username or Email already exists.');
      }
    }
  };

document.querySelector('#form').addEventListener('submit', signupFormHandler);