// 1. write a base class called RegularShape whose constructor receives the number
//    of sides and the length of a side. write at least two derived classes that extend
//    RegularShape, representing two different regular shapes,
//    containing a method called getArea, which must return the area of the
//    shape, using the two arguments that the parent class should receive.

// 1. Write a base class called RegularShape whose constructor receives the number of sides and the length of a side. 
// Write at least two derived classes that extend RegularShape, representing two different regular shapes, containing a method called getArea, which must return the area of the shape, using the two arguments that the parent class should receive.

class RegularShape {
	constructor(numberOfSides, sideLength, shapeName) {
		this.numberOfSides = numberOfSides;
		this.sideLength = sideLength;
		this.shapeName = shapeName;
	}

	calculateArea() {
		const cot = 1 / Math.tan(Math.PI / this.numberOfSides)
		const area = this.numberOfSides * Math.pow(this.sideLength, 2) * cot / 4;

		console.log(`${this.shapeName} Area:`, area.toFixed(2))
	}
}

class Triangle extends RegularShape {
	constructor(numberOfSides, sideLength, shapeName) {
		super(numberOfSides, sideLength, shapeName)
	}

	getArea() {
		super.calculateArea()
	}
}

class Square extends RegularShape {
	constructor(numberOfSides, sideLength, shapeName) {
		super(numberOfSides, sideLength, shapeName);
	}

	getArea() {
		super.calculateArea()
	}
}

class Pentagon extends RegularShape {
	constructor(numberOfSides, sideLength, shapeName) {
		super(numberOfSides, sideLength, shapeName)
	}

	getArea() {
		super.calculateArea()
	}
}

class Hexagon extends RegularShape {
	constructor(numberOfSides, sideLength, shapeName) {
		super(numberOfSides, sideLength, shapeName);
	}

	getArea() {
		super.calculateArea()
	}
}

// const regular = new RegularShape(4, 10, 'Regular Shape')
const triangle = new Triangle(3, 12, 'Triangle')
const square = new Square(4, 13, 'Square');
const pentagon = new Pentagon(5, 42, 'Pentagon')
const hexagon = new Hexagon(6, 23, 'Hexagon');

// regular.calculateArea();
triangle.getArea();
square.getArea();
pentagon.getArea();
hexagon.getArea();
