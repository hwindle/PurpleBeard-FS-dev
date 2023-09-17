//////////////// Query Selector Exercise //////////////////
/*
1. Given the boiler plate use query selector console log the following items on the page:​

    - The text Content of the H1 element​
    - The text content of the id “Hero”​
    -The text content of the first instance of the class “list”​

2. Add some text to the p tag with the id “dynamic-text”​
​*/

// Add Your JavaScript Below
const h1Element = document.querySelector('h1');
console.log(h1Element.textContent);

const pElement = document.querySelector('p#hero');
console.log(pElement.textContent);

const listElements = document.querySelectorAll('.list');
console.log(listElements[0].textContent);

let dynamicText = document.querySelector('#dynamic-text');
dynamicText.textContent = 'Some new text in here';