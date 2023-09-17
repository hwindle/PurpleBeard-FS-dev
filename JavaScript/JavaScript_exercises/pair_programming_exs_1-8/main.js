// Function 1
function hello() {
  console.log('Hello, World');
}

hello();
// quadrulper
function quadrulper(num) {
  return num * 4;
}

console.log(quadrulper(-20));

// ex 3
// welcome param firstName, lastName
// return 'hello first last, how can I help you?'
// console.log with names.
function welcome(firstName, lastName) {
  return `Hello ${firstName.toLowerCase()} ${lastName.toUpperCase()}, how can I help you?`;
}

console.log(welcome('Hazel', 'Windle'));

// function 4
// tempConvertor function
// 1 parameter farenheit
// return temp celsius
// Celsius = (fahrenheit - 32) / 5 * 9
function tempConvertor(fahrenheit) {
  let result = (fahrenheit - 32) * 5 / 9;
  return result;
}

console.log(Math.round(tempConvertor(80)));

// function 5
function humanToDogYears(humanAge, name) {
  let dogYears = 0;
  const displayAge = humanAge;

  if (humanAge - 15 > 0) {
    // take off first puppy year
    humanAge -= 15;
    dogYears++;
  } 
  if (humanAge - 9 > 0) {
    // second puppy year
    humanAge -= 9;
    dogYears++;
  }
  // divide by 5 for each subsequent year
  // and cut any decimal points off
  let remainingDogYears = parseInt(humanAge / 5);
  //console.log('remaining dog years: ' + remainingDogYears);
  dogYears += remainingDogYears;
  // return the number
  return `${name}'s age (${displayAge}) in dog years: ${dogYears}`;
}

console.log(humanToDogYears(34, 'Steve'));

/**  
 * Calculator function
 * @param {number} num1 - first number
 * @param {string} operator - must be * / + - 
 * @param {number} num2 - second number 
 * 
 * @return {number} result - returns a numerical result (not rounded)
 * Returns undefined if no appropriate numbers are given.
*/
function calculator(num1, operator, num2) {
  let result = 0;
  // Data checking
  if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
    console.log('Either num1 or num2 isn\'t a number.');
    return;
  } else if (num1 === 0 || num2 === 0) {
    console.log('Don\'t Divide by zero!');
    return;
  }
  // Check the operator is one of the 4.
  if (operator !== '*' && operator !== '/' 
    && operator !== '+' && operator !== '-') {
    console.log('Wrong operator given, please use *, /, + or - ');
    return;
  }
  // Put the largest number first, then the smallest one
  if (num1 > num2) {
    // perform the calculation
    if (operator === '*') {
      result = num1 * num2;
    } else if (operator === '/') {
      result = num1 / num2;
    } else if (operator === '+') {
      result = num1 + num2;
    } else if (operator === '-') {
      result = num1 - num2;
    }
  } else {
    // perform the calc with the largest num 1st.
    if (operator === '*') {
      result = num2 * num1;
    } else if (operator === '/') {
      result = num2 / num1;
    } else if (operator === '+') {
      result = num2 + num1;
    } else if (operator === '-') {
      result = num2 - num1;
    }
  }
  // result
  return result;
}

console.log('Calculate: ' + calculator(4, '+', 10));

/***
 * Function 7: min
 * 
 * @param {number} a Any number
 * @param {number} b Another number
 * 
 * @return {number} a or b, the smallest number
 */
function min(a, b) {
  if (a === b) {
    return a;
  } else if (a > b) {
    return b;
  } else {
    return a;
  }
}

console.log('Min number: ' + min(-100, 10));

/***
 * Function 8: pow(x, n)
 * 
 * @param {number} x The number to raise to the power of.
 * @param {number} n Exponent number (x=2, n=3 would be: 2 * 2 * 2)
 * 
 * @return {number} result of the equation
 */
function pow(x, n) {
  let result = x ** n;
  return result;
}

console.log('Power: ' + pow(1.65, 30));