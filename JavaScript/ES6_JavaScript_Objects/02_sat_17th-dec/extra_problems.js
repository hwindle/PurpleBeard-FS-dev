/*

Create an object that hosts an array of objects, create a method
1. getTotalNumberOfObjects -> returns the count of how many objects are stored in that array.
2. topExistingArrayOfObjects -> is a method that accepts another array of objects as parameters and merges it with an original array of objects inside the object.
*/

const complex = { cards: 
  [
    {
      "issuer": "VISA",
      "cardNumber": "4716191986383028",
      "expiryMonth": "10",
      "expiryYear": "2022",
      "exp": "10/2022",
      "cvv": 555,
      "name": "Rhea Leffler",
      "address": "382 Muller Falls",
      "country": "Timor-Leste",
      "zipcode": "73471-4227"
    },
    {
      "issuer": "VISA",
      "cardNumber": "4716069852168733",
      "expiryMonth": "03",
      "expiryYear": "2027",
      "exp": "03/2027",
      "cvv": 153,
      "name": "Sadye Koelpin",
      "address": "04448 Penelope Junctions",
      "country": "Western Sahara",
      "zipcode": "85513-6712"
    },
    {
      "issuer": "VISA",
      "cardNumber": "4485874847610478",
      "expiryMonth": "06",
      "expiryYear": "2023",
      "exp": "06/2023",
      "cvv": 203,
      "name": "Oswald Hauck",
      "address": "15232 Gislason Gardens",
      "country": "Martinique",
      "zipcode": "92200-0165"
    },
    {
      "issuer": "VISA",
      "cardNumber": "4539164834120152",
      "expiryMonth": "04",
      "expiryYear": "2023",
      "exp": "04/2023",
      "cvv": 128,
      "name": "Lisandro Considine",
      "address": "95027 Khalid Falls",
      "country": "India",
      "zipcode": "49709-9847"
    }
  ],

  getTotalNumberOfObjects: function() {
    return this.cards.length;
  },

  topExistingArrayOfObjects: function(newArray) {
    // join newArray, an array of objects
    try {
      this['cards'] = this.cards.concat(newArray);
      return true;
    } catch(e) {
      console.error('Concat error: ', e);
    }
  }
};

// tests
console.log(complex.getTotalNumberOfObjects());

const threeOtherCards = [
  {
		"issuer": "VISA",
		"cardNumber": "4207593522101879",
		"expiryMonth": "12",
		"expiryYear": "2027",
		"exp": "12/2027",
		"cvv": 151,
		"name": "Eugenia Toy",
		"address": "6814 Aylin Court",
		"country": "Equatorial Guinea",
		"zipcode": "26639-6580"
	},
	{
		"issuer": "VISA",
		"cardNumber": "4363058041342040",
		"expiryMonth": "11",
		"expiryYear": "2025",
		"exp": "11/2025",
		"cvv": 220,
		"name": "Lupe Quigley",
		"address": "3669 Dexter Rue",
		"country": "Marshall Islands",
		"zipcode": "08626-9816"
	},
	{
		"issuer": "VISA",
		"cardNumber": "4716974667594827",
		"expiryMonth": "12",
		"expiryYear": "2027",
		"exp": "12/2027",
		"cvv": 301,
		"name": "Hector Witting",
		"address": "755 Raynor Prairie",
		"country": "Argentina",
		"zipcode": "01847"
	}
];

complex.topExistingArrayOfObjects(threeOtherCards);
console.log(complex.cards);

console.log(complex.getTotalNumberOfObjects());