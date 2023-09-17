// get newsletter btn
const newsletterBtn = document.querySelector('button.newsletter-btn');
// get close btn variable
const closeBtn = document.querySelector('#close-modal');
// get the modal-newsletter div
const modal = document.querySelector('#modal-newsletter');

// newsletter btn event listener
newsletterBtn.addEventListener('mousedown', () => {
  modal.classList.add('visible');
  // mousedown has to be used instead of click
  // as otherwise the modal is only visible during the click.
  // (mousedown and mouseup)
});

// close btn event listener - submitting the form also closes box
closeBtn.addEventListener('click', () => {
  modal.classList.remove('visible');
});

