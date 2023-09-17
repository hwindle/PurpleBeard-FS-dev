class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise`;
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    return `${this.name} roars`;
  }
}

const lioness = new Lion('Kitten');
console.log(lioness.speak());