// Array exercise 1
let breakfast = ["eggs"];
breakfast.push("bacon");
breakfast.unshift("Tomatoes");
console.log("Breakfast length: ", breakfast.length);

/**
 * Array exercise 2
 * @param {array} an array of any length
 * @returns last item of the array
 */
function returnLastItem(array) {
  return array[array.length - 1];
}

console.log(returnLastItem([1, 2, 3, 4, "five"]));

// Array exercise 3
/**
 *
 * @param {array} array - of any odd length
 * @param {string} value - a string value to place in the middle
 * @returns {array} returns a new array.
 */
function replaceMiddle(array, value) {
  if (array.length % 2 !== 0) {
    // array length is odd
    const middleIndex = Math.floor(array.length / 2);
    let resultArr = array;
    resultArr[middleIndex] = value;
    return resultArr;
  } else {
    console.error("Array is not of odd length");
    return;
  }
}

let musicGenres = ["Rock", "Rap"];
musicGenres.push("Jazz");
let newMusicGenres = replaceMiddle(musicGenres, "Classical");
newMusicGenres.unshift("Blues", "Reggae");
console.log(newMusicGenres);

// Array exercise 4
/**
 * Alphabetically sorts an array of strings
 * @param {array} an unsorted array
 * @returns {array} sorted array
 */
function alphabeticalSort(array) {
  // used locale Compare for a case insensitive sort
  return array.sort((a, b) => a.toLowerCase()
    .localeCompare(b.toLowerCase()));
}

console.log(alphabeticalSort(breakfast));

// Loop exercises
// exercise 1
const list = document.createElement('ul');
const exerciseDiv1 = document.querySelector('#loops-ex-1');
exerciseDiv1.appendChild(list);

for (let i = 10; i >= 1; i--) {
  const newListItem = document.createElement('li');
  newListItem.innerHTML = i;
  list.appendChild(newListItem);
}

// exercise 2
const tasks = ['Hoover stairs', 'Clean the oven', 'Clean the Raspberry Pi'];
const exerciseDiv2 = document.querySelector('#loops-ex-2');
const taskUL = document.createElement('ul');
exerciseDiv2.appendChild(taskUL);

for (let i = 0; i < tasks.length; i++) {
  const taskListItem = document.createElement('li');
  taskListItem.innerHTML = `Task ${i + 1}: ${tasks[i]}`;
  taskUL.appendChild(taskListItem);
}

// exercise 3
// let i = 3;
// while (i) {
//   // should run until 0 (falsy value)
//   alert(i--);
// }

// exercise 4
const paragraph = document.createElement('p');
const exerciseDiv4 = document.querySelector('#loops-ex-4');
exerciseDiv4.appendChild(paragraph);

for (let even = 2; even <= 10; even += 2) {
  paragraph.innerHTML += even + '   ';
}

// exercise 5: replace for with while
// Original: 
// for (let x = 0; x < 3; x++) {
//   alert(`Number ${x}!`);
// }
let x = 0;
while (x < 3) {
  alert(`number ${x}!`);
  // don't forget this, otherwise will be an infinite loop
  x++;
}

// exercise 6
/**
 * @param {array} array of numbers
 * @return {number} sum of the array
 */
function sumInput(numberArr) {
  let result = 0;
  for (let i = 0; i < numberArr.length; i++) {
    if (typeof(numberArr[i]) !== 'number') {
      // go to next iteration of loop
      continue;
    } else {
      result += numberArr[i];
    }
  }
  return result;
}

const sumInputTag = document.querySelector('#sumInput');
sumInputTag.innerHTML += sumInput([1, '2', 3, 4, 10, 9]);

function meanAvg(numberArr) {
  let result = 0;
  for (let i = 0; i < numberArr.length; i++) {
    if (typeof(numberArr[i]) !== 'number') {
      // go to next iteration of loop
      continue;
    } else {
      result += numberArr[i];
    }
  }
  return result / numberArr.length;
}

const avgInputTag = document.querySelector('#meanAvg');
avgInputTag.innerHTML += meanAvg([1, '2', 3, 4, 10, 9]);