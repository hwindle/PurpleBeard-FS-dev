const spaceCraft = {
  size: 120,
  range: 19.5,
  model: 'Falcon X',
  capacity: 3,
};

console.log('Space craft range: ', spaceCraft.range);
for (let item in spaceCraft) {
  console.log(spaceCraft[item]);
}


let person = {
  firstName: 'Santa',
  lastName: 'Claus',
  age: 51,
  eyeColor: 'blue',
};

console.log(person.firstName + ', aged: ' + person.age);
console.log(person['eyeColor'] + ' eyes, ' + person['lastName']);

person['new_property'] = '';
console.log(person);
// adding new property
person['height'] = '151cm';
if (person.hasOwnProperty('height')) {
  console.log(`The person object has the property 
    height, which is ${person.height}`);
}

// deleting a property
delete person.new_property;
// console.log(person);

// Objects exercise 2
let myObj = {
  gift: 'pony',
  pet: 'kitten',
  bed: 'sleigh',
};

// the key parameter is an object property
// obj is an object.
function getValue(key, obj) {
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  } 
}

console.log('Ex 2, get value: ', getValue('pet', myObj));

// Exercise 3
const album1 = {
  title: 'Serenade',
  artist: 'Katherine Jenkins',
  genre: 'Classical',
  year: 2006,
  rating: 3.5,
};

const album2 = {
  title: 'Christmas songs',
  artist: 'Various artists',
  genre: 'Classical',
  year: 1990,
  rating: 4,
};

let musicCollection = [];
musicCollection.push(album1);
musicCollection.push(album2);

musicCollection.forEach((album) => {
  for (let albumKey in album) {
    console.log(`Key: ${albumKey}, Value: ${album[albumKey]}`);
  }
});

// exercise 4
let myPlants = [
  {
    type: 'flowers',
    list: [
      'rose',
      'tulip',
      'dandelion'
    ]
  },
  {
    type: 'trees',
    list: [
      'fir',
      'pine',
      'birch'
    ]
  },
];

console.log('Ex 4: ', myPlants[1].list[1]);

// exercise 5 - methods
const staffMember = {
  firstName: 'John',
  lastName: 'Smith',
  id: 1235,
  // method
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

console.log('Ex 5 (methods): ', staffMember.fullName());