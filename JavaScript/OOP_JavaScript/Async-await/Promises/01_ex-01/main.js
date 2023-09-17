const url = 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

fetch(url)
.then((response) => {
  return response.json();
})
.then((cannedGoods) => {
  const firstCanName = cannedGoods[0].name;
  const noOfCans = cannedGoods.length;
  console.log(`First Can: ${firstCanName}, number of tins: ${noOfCans}.`);
  let ulElement = document.querySelector('ul#tins');
  cannedGoods.forEach((can) => {
    let newLi = document.createElement('li');
    newLi.innerText = can.name;
    ulElement.appendChild(newLi);
  });
})
.catch((error) => {
  console.error('Error on the fetch promise, line 19: ', error);
});