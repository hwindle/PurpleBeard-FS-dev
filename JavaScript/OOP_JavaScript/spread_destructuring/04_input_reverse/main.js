// reverse any string
function stringReverse(text) {
  // transform text to an array
  let result = [...text];
  // reverse the array
  result.reverse();
  console.log(result);
  // join the array back into a string
  return result.join('');
}

// get the text from the DOM
function getText() {
  const textField = document.querySelector('#reverse');
  return textField.value;
}

const submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const originalText = getText();
  const reversedText = stringReverse(originalText);
  const h4Element = document.querySelector('#reversed-string');
  h4Element.textContent = reversedText;
});

