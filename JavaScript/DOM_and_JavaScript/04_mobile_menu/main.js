// get the hamburger menu element
const hamburgerBtn = document.querySelector('button.hamburger-btn');
// get the item to be hidden
const mainMenuList = document.querySelector('ul.main-menu');
// add event listener on click
hamburgerBtn.addEventListener('click', () => {
  mainMenuList.classList.toggle('hidden');
});
