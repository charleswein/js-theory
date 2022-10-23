class Rectangle {
    constructor(height, width) {
        this.height = height
        this.width = width
    }

    get area () {
        this.calcArea()
    }

    calcArea () {
        return this.height * this.width
    }
}

const rectangle = new Rectangle(10, 20)
console.log(rectangle)

class Polygon {
    constructor(...sides) {
        this.sides = sides
    }

    *getSides() {
        for (let side of this.sides) {
            yield side
        }
    }
}

const polygon = new Polygon(1,2,3,4,5)

console.log(polygon.getSides())

// static properties are useful for caches, fixed-configuration

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static displayName = "Point";
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const point1 = new Point(5, 5)
const point2 = new Point(10, 20)

console.log(Point.distance(point1, point2));

class Animal {
    constructor(name) {
        this.name = name
    }

    static eat () {
        // this
        console.log(this);
    }

    speak () {
        console.log('Miay!, Miay!')
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }
}

class Lion extends Cat {
    speak() {
        super.speak();
        console.log('Rrrrr')
    }
}

const animal = new Animal('Tima')

console.log(animal)
console.log(animal.speak())

console.log(Animal.eat());
const tima = new Cat('Tima')
const lion = new Lion('Simba')

console.log(tima.speak());
console.log(lion.speak());

class Rectangle1 {
    #height = 0;
    #width;
    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }
}

const rectangle1 = new Rectangle1()

//private fields can only be read or written within the class body.

console.log(rectangle1.width);

// The species pattern lets you override default constructors.

class MyArray extends Array {
    // Overwrite species to the parent Array constructor
    static get [Symbol.species]() { return Array; }
}

const a = new MyArray(1, 2, 3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true
// ---––––––––––––---- // ---––––––––––––---- // ---––––––––––––----

//mix-in

const calculatorMixin = (Base) =>  class extends Base {
    calculator () {
        console.log('calculator')
    }
}

const randomizerMixin = (Base) => class extends Base {
    randomize () {
        console.log('randomize')
    }
}

class Foo {

}

class Bar extends calculatorMixin(randomizerMixin(Foo)) {

}

const bar = new Bar ()

// bar.calculator()
bar.randomize()
