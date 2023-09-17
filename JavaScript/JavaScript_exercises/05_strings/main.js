// function for display
function displaySomewhere(elementId, string) {
  try {
    const element = document.querySelector('#' + elementId);
    element.innerHTML += string + '<br>';
  } catch(e) {
    console.error('displaySomewhere: ', e);
  }
}

// Strings
// exercise 1
/**
 * function addFullStop
 * @param {string} can be with or without a full stop
 * @returns {string} result, with one full stop only.
 */
function addFullStop(inputStr) {
  // does the string already have a full stop at the end?
  if (inputStr.endsWith('.')) {
    return inputStr;
  } 
  // Put a full stop on the end.
  return inputStr + '.';
}

const testFullStop1 = addFullStop('hello...');
displaySomewhere('ex-1-para', testFullStop1);
const testFullStop2 = addFullStop('59438uryw');
displaySomewhere('ex-1-para', testFullStop2);
const testFullStop3 = addFullStop('Java..Script');
displaySomewhere('ex-1-para', testFullStop3);

/**
 * Capitalize - capitalises first letter of string
 * @param {string} check to see whether this is a string
 * @return {string} result - Title Case, even if str is upper case
 */
function capitalize(inputStr) {
  return inputStr[0].toUpperCase() + inputStr.slice(1).toLowerCase();
}

// tests
const testCapital1 = capitalize('robert');
const testCapital2 = capitalize('DAVE');
const testCapital3 = capitalize('Jenny');
displaySomewhere('ex-2-para', testCapital1);
displaySomewhere('ex-2-para', testCapital2);
displaySomewhere('ex-2-para', testCapital3);

/**
 * Favourite foods forEach ex 1
 */
const favouriteFoods = ['apples', 'chocolate', 'pie', 'spaghetti'];
favouriteFoods.forEach(item => {
  console.log(item);
});

/**
 * sumForEach function
 * @param {array} of numbers.
 * @returns {number} sum of numbers array
 */
function sumForEach(numArray) {
  let result = 0;
  numArray.forEach(val => {
    if (typeof(val) === 'number') {
      result += val;
    }
  });
  return result;
}
// tests
const valuesArr = [72, 3.5, '1', 10, 24, 2, 0.8, 1];
const testSum1 = sumForEach(valuesArr);
displaySomewhere('for-each-2', testSum1);

/**
 * product function
 * @param {array} of numbers.
 * @returns {number} num1 * num2 * num(n)...
 */
function product(numArray) {
  let result = 1;
  numArray.forEach(val => {
    result = result * Number(val);
    // console.log(`Result: ${result}, val: ${val}`);
  });
  return result;
}

// tests
const testProduct = product(valuesArr);
displaySomewhere('for-each-3', testProduct);

/**
 * For each exercise 4: returns new array of grades only < 50
 * @param {array} studentGrades 
 * @returns {array} resultArr - grades 51 and above.
 */
function passedGrades(studentGrades) {
  let resultArr = [];
  studentGrades.forEach(val => {
    if (val > 50) {
      resultArr.push(val);
    }
  });

  return resultArr;
}

// tests
const studentGrades = [70, 20, 53, 64, 78, 60, 32];
const passedStudents = passedGrades(studentGrades);
displaySomewhere('for-each-4', passedStudents);

// Join

const students = ['Annabel', 'John', 'Mary', 'Lucille'];
const studentsString = students.join(' ');
displaySomewhere('join-ex-1', studentsString);

/**
 * function toCSV
 * @param {array} an array of any data types.
 * @return {string} the array with commas in between (CSV)
 */
function toCSV(array) {
  return array.join();
}

const csvStudents = toCSV(students);
displaySomewhere('join-ex-2', csvStudents);