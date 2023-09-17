////////////////  Query Selector All ////////////////////

/* 
1. Given the boiler plate use query selector console log the following items on the page:​

    - The second p tag​
    - All of the list items​ with the class list
    - The text content of the third instance of the class “list”​
    - The length of the list.

*/

// Write your JavaScript below
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs[1]);

const listItemsArr = document.querySelectorAll('li.list');
listItemsArr.forEach((li) => console.log(li));

console.log(listItemsArr[2].textContent);
console.log('List of li\'s length: ', listItemsArr.length);