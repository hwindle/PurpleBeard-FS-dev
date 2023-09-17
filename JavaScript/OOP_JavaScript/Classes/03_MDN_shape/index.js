
// Next we'd like you to create a Square class that inherits from Shape, and adds a calcArea() method that calculates the square's area. Also set up the constructor so that the name property of Square object instances is automatically set to square, and the sides property is automatically set to 4. When invoking the constructor, you should therefore just need to provide the sideLength property.

// Create an instance of the Square class called square with appropriate property values, and call its calcPerimeter() and calcArea() methods to show that it works OK.

class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    const perimeter = parseInt(this.sides) * parseFloat(this.sideLength);
    console.log('Perimeter: ', perimeter);
  }
}

class Square extends Shape {
  constructor(name, sides, sideLength) {
    super(name, sides);
    this.name = 'square';
    this.sides = 4;
    this.sideLength = parseFloat(sideLength);
  }

  calcArea() {
    console.log(this);
    let area = this.sideLength * this.sideLength;
    console.log('Area of square: ', area.toFixed(2));
  }
}

const earlierSquare = new Shape('square', 4, 5);
earlierSquare.calcPerimeter();
const triangle = new Shape('triange', 3, 3);
triangle.calcPerimeter();
// object from square class
const square = new Square(null, null, 8);
square.calcArea();