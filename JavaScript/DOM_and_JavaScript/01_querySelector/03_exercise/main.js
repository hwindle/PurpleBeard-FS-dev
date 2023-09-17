const favouriteFoods = [
  'banana',
  'peach',
  'ice cream',
  'chicken tikka masala',
  'lasanga'
];

const parentElement = document.querySelector('#dynamic-content');

favouriteFoods.forEach((food) => {
  parentElement.innerHTML += `<li>${food}</li>`;
});

const body = document.querySelector('body');
body.classList.add('darkMode');