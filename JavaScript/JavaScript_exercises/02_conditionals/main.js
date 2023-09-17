// password is over 7 characters
let password = 'passwo';
if (password.length > 7) {
  console.log('true');
} else {
  console.log('false');
}


/* roller coaster
  height over or equals 150cm 
  check for number with typeof.
 */
const height = 149;
if (height >= 150 && typeof(height) === 'number') {
  console.log('You can go on the ride');
} else if (typeof(height) !== 'number') {
  console.log('Please enter a number');
} else {
  console.log('Sorry you are not tall enough');
}

/* Dice game
  two sixes : a bear (top prize)
  double number: 3 free throws
  even number: one free throw
  other combination: loose game
*/
function showResult(inputText) {
  const resultElement = document.querySelector('#result');
  resultElement.innerHTML = inputText;
}


let die1 = Math.floor(Math.random() * 6 + 1);
// and dice throw two
let die2 = Math.floor(Math.random() * 6 + 1);
let isTotalEven = (die1 + die2) % 2 === 0;
// text string to show user
let result = '';
// if both are six win top prize
if (die1 === 6 && die2 === 6) {
  result = `You get top prize as you rolled ${die1} and ${die2}.\n
    <strong><em>You win a bear!</em></strong>`;
  showResult(result);
} else if (die1 === die2) {
  // if both die equal one another, 3 free throws
  result = `You have two equal dice, ${die1} and ${die2}.\n
    You get 3 extra throws!`;
  showResult(result);
} else if (isTotalEven) {
  // if the total dice roll is even: one free throw (variable)
  result = `You have an even total, from ${die1} and ${die2}.\n
    You get an extra throw.`;
  showResult(result);
} else {
  // else for other combination.
  result = `You got ${die1} and ${die2}. You loose. :-(`;
  showResult(result);
}
