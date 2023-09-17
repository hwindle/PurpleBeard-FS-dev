class Animal {
  constructor(name, group, sound) {
    this.name = name;
    this.group = group;
    this.sound = sound;
  }

  animalMessage() {
    return `This is a ${this.name}, it's a ${this.group} and it ${this.sound}s.`;
  }
}

const sheep = new Animal('sheep', 'mammal', 'baa');
console.log(sheep.animalMessage());
const squirrel = new Animal('squirrel', 'mammal', 'chirp');
console.log(squirrel.animalMessage());
const bee = new Animal('bee', 'insect', 'buzze');
console.log(bee.animalMessage());