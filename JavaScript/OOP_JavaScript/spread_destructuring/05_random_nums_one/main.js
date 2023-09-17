const oneHundredNums = [];
for (let i = 0; i < 99; i++) {
  oneHundredNums.push(Math.floor(Math.random() * 1000) + 1);
}

const mode = (array) => {
  // counting the times each number occurs
  let countCommonNums = {};
  let pastCount = 0;
  let mostCommon = 0;

  array.forEach(num => {
    if (countCommonNums[num]) {
      countCommonNums[num]++;
    } else {
      // first time seeing this num, so add a new key to obj
      countCommonNums[num] = 1;
    }
    // compares the current iterations freq count against 
    // the past iterations count, for returning the
    // highest count (mostCommon)
    if (pastCount < countCommonNums[num]) {
      mostCommon = num;
      pastCount = countCommonNums[num];
    }
  });

  return mostCommon;
};

console.log('Mode: ', mode(oneHundredNums));

const median = (array) => {
  array.sort((a, b) => a - b);
  // find the middle value
  // is the array even?
  if (array.length % 2 === 0) {
    const numBeforePivot = array[length / 2 - 1];
    const numAfterPivot = array[length / 2];
    return (numBeforePivot + numAfterPivot) / 2;
  } else {
    // odd array - exact middle of sorted array
    return array[(array.length - 1) / 2];
  }
};

console.log('Median: ', median(oneHundredNums));

const mean = (array) => {
  const summedArr = array.reduce((t, num) => t + num);
  return (summedArr / array.length).toFixed(2);
};

console.log('Mean: ', mean(oneHundredNums));
// sort array into ascending order
console.log('Sorted array (ascending order)');
console.log(oneHundredNums.sort((a, b) => a - b));

// put array into 5 nested arrays
const fiveLittleArrays = [];
fiveLittleArrays.push(oneHundredNums.slice(0, 19));
fiveLittleArrays.push(oneHundredNums.slice(20, 39));
fiveLittleArrays.push(oneHundredNums.slice(40, 59));
fiveLittleArrays.push(oneHundredNums.slice(60, 79));
fiveLittleArrays.push([...oneHundredNums.slice(80)]);
console.log(fiveLittleArrays);