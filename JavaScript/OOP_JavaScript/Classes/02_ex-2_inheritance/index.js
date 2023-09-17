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

// root also means 'admin' in Linux/Unix
class Root extends User {
  constructor(firstName, lastName, admin) {
    super(firstName, lastName);
    if (typeof(admin) === 'boolean') {
      this.admin = admin;
    } else {
      console.error('The argument passed to admin is not true or false');
    }
  }

  adminValue() {
    return `${this.firstName} has sudo or root privileges (true or false): ${this.admin}`;
  }
}

const person = new Root('Ray', 'Jackson', false);
console.log(person.adminValue());
