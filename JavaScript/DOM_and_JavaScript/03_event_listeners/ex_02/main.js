// get the password input field
const passwordInput = document.querySelector('#password');
// create a span
const errorMessage = document.createElement('span');
// get the form parent
const form = document.querySelector('form');

// event listener
passwordInput.addEventListener('keydown', (event) => {
  if (passwordInput.value.length <= 8) {
    console.log('In if statement line 11');
    errorMessage.textContent = 'Password must be longer than 8 characters';
    form.appendChild(errorMessage);
  } else {
    // hide if longer than 8 characters
    errorMessage.style.display = 'none';
  }
});


