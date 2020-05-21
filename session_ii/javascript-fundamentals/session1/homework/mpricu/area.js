class RegularShape {
    constructor(sides, lenght) {
        this.sides = sides;
        this.lenght = lenght;
    }
}

class Triangle extends RegularShape {
    constructor(sides, lenght) {
        super(sides, lenght);
        this.name = 'Triangle';
    }
    getArea() {
        const s = this.sides * this.lenght / 2;
        return Math.sqrt(s * ((s - this.lenght) * (s - this.lenght) * (s - this.lenght)));
    };
}

const triangle = new Triangle(3, 10);
console.log('Triangle area is', triangle.getArea());

class Square extends RegularShape {
    constructor(sides, lenght) {
        super(sides, lenght);
        this.name = 'Square';
    }
    getArea() {
        return this.lenght * this.lenght
    };
}
const square = new Square(4, 10);
console.log('Square area is', square.getArea());