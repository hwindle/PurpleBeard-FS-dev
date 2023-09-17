const url = 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

fetch(url)
.then((response) => {
  if (response.ok) {
    return response.json();
  }
})
.then((foodData) => {
  // get all the tinned items that are over £1.00
  const overAPound = foodData.filter(item => item.price > 1.00);
  // display a table
  const tbodyElement = document.querySelector('tbody');
  overAPound.forEach(tin => {
    tbodyElement.innerHTML += `<tr>\n<td>${tin.name}</td>\n
      <td>${tin.price}</td>\n<td>${tin.type}</td>\n
      </tr>\n`;
  });
})
.catch((error) => {
  console.error('API, or fetch problem: ', error);
});