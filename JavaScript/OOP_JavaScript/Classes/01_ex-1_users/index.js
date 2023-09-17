// create a new class
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    return `Hi from ${this.firstName} ${this.lastName}!`;
  }
}

const person = new User('Angie', 'Jackson');
console.log(person.greet());
