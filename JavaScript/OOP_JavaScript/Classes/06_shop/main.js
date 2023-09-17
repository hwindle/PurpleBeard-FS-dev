class Shop {
  constructor(name, address, mapLocation, phoneNumber) {
    this._name = name;
    this._address = address;
    this._mapLocation = mapLocation;
    this._phoneNumber = phoneNumber;
  }

  // getters
  get getName() {
    return this._name;
  }

  get getAddress() {
    return this._address;
  }

  get getMap() {
    return this._mapLocation;
  }

  get getTelNo() {
    return this._phoneNumber;
  }

  // setters
  set setName(name) {
    if (typeof(name) === 'string') {
      this._name = name;
    } else {
      console.error('name should be a string!');
    }
  }

  set setAddress(address) {
    this._address = address.toString();
  }

  set setMap(mapLocation) {
    this._mapLocation = mapLocation.toString();
  }

  set setTelNo(phoneNumber) {
    this._phoneNumber = phoneNumber.toString();
  }
}

class Branch extends Shop {
  constructor(name, address, mapLocation, phoneNumber, launchDate, numberOfEmployees) {
    super(name, address, mapLocation, phoneNumber);
    this.launchDate = launchDate.toString();
    this.numberOfEmployees = parseInt(numberOfEmployees);
  }

  get getNoOfEmployees() {
    return `Number of people working here: ${this.numberOfEmployees}`;
  }

  get getOpeningDate() {
    return this.launchDate;
  }

  set setNoOfEmployees(num) {
    this.numberOfEmployees = parseInt(num);
  }

  set setOpeningDate(date) {
    this.launchDate = date.toString();
  }
}

// displays the object attributes in the page
// returns undefined if a shop instance is used
// instead of branch
function displayData(shopObject) {
  const div = document.querySelector('#shop-data');
  div.innerHTML = `<h2>${shopObject.getName}</h2>
    \n<address>${shopObject.getAddress}<br />\n
      ${shopObject.getMap}</address>\n
      <p>${shopObject.getTelNo}</p>
      <p>Date opened: ${shopObject.getOpeningDate}</p>
      <p>${shopObject.getNoOfEmployees}</p>`;
}



const pavers = new Shop('Pavers', 'High Street', 'Bridlington', '(0114) 912 4312');
//displayData(pavers);
// console.log(pavers.getMap);
const cardFactory = new Branch('Card Factory', '231 High Street, Stockton', 'up North', '(0113) 945 6789', '2021-01-04', 89);
// use getters and setters like properties,
// not like functions/methods with ().
cardFactory.setNoOfEmployees = 5;
cardFactory.setName = 56;

displayData(cardFactory);