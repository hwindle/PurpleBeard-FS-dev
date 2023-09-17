// Map exercise 1
/**
 * @param {array} array of kilometer distances
 * @returns {array} array of distances in miles
 */
function toMiles(kilometers) {
  let mileDistances = kilometers.map((km) => {
    return (km * 0.621371).toFixed(2);
  });
  return mileDistances;
}

const kilometers = [56.3, 12.6, 90, 112, 98.65, 1023];
console.log("Miles: ", toMiles(kilometers));

/**
 * Map exercise 2 (or filter)
 * function convertToNums
 *
 * @param {array} takes in array of mixed data types
 * @returns {array} new array of only number types
 */
function convertToNums(mixedArray) {
  let numberArray = mixedArray.map((val) => {
    return Number(val);
  });
  // take out NaN - undefined gets casted to NaN
  let resultArray = numberArray.filter((num) => {
    return !isNaN(num);
  });
  // return results
  return resultArray;
}

const inputArray = ["18", "27", 19, 21, "22 ", NaN, undefined];
console.log("second map/filter exercise: ", convertToNums(inputArray));

/**
 * filters out anyone below 18
 * @param {array} ageArray - numbers
 * @returns {array} resultArray - numbers equal to or over 18
 */

function canVote(ageArray) {
  return (resultArray = ageArray.filter((age) => age >= 18));
}

const ages = [18, 90, 11, 15, 22, 34.5, 6];
console.log("Filter ages: ", canVote(ages));

// reduce functions
const numArray = [5, 10, 12, 9, 11, 8, 23, 6];

/**
 * reduce sum function
 * @param {array} numArray - an array of numbers
 * @returns {number} number for result
 */
function sum(numArray) {
  const result = numArray.reduce((acc, value) => {
    return acc + value;
  });
  return result;
}

console.log('Sum reduce function: ', sum(numArray));

/**
 * product function
 * @param {array} numArray - an array of nums.
 * @returns {number} number for the result
 */
function product(numArray) {
  return result = numArray.reduce((total, item) => {
    // console.log(`Total: ${total}, item: ${item}.`);
    return total * item;
  });
}

console.log('Product reduce function: ', product(numArray));