// get button variable
const button = document.querySelector('#my-button');
// constant for dynamic content div
const box = document.querySelector('#dynamic-content');

// display the box on a click
button.addEventListener('click', () => {
  button.textContent = 'Hide';
  box.classList.toggle('hide');
});

// button.addEventListener('mouseup', () => {
//   button.textContent = 'Show';
// });