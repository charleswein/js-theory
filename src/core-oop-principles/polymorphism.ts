interface GenericAdd <AddType>{
  add: (x: AddType, y:AddType) => AddType
}

class GenericNumber implements GenericAdd<number> {
  add (x: number, y: number) {
    return x + y
  }
}

class GenericString implements GenericAdd<string> {
  add (x: string, y: string) {
    return x + y
  }
}


const genericNumber = new GenericNumber();
genericNumber.add(1, 2); // 3

const genericString = new GenericString();
genericString.add("Hello", ", Mammals!"); // Hello, Mammals!
//----//----//----//----//----//----//----//----//----//----

interface Coffee {
  getCost(): number;
  getIngredients(): string;
}

class SimpleCoffee implements Coffee {
  getCost() {
    return 8;
  }

  getIngredients() {
    return "Coffee";
  }
}

abstract class CoffeeDecorator implements Coffee {
  constructor(private readonly decoratedCoffee: Coffee) {}

  getCost() {
    return this.decoratedCoffee.getCost();
  }

  getIngredients() {
    return this.decoratedCoffee.getIngredients();
  }
}

class WithMilk extends CoffeeDecorator {
  constructor(private readonly c: Coffee) {
    super(c);
  }

  getCost() {
    return super.getCost() + 2.5;
  }

  getIngredients() {
    return super.getIngredients() + ", Milk";
  }
}

class WithSprinkles extends CoffeeDecorator {
  constructor(private readonly c: Coffee) {
    super(c);
  }

  getCost() {
    return super.getCost() + 1.7;
  }

  getIngredients() {
    return super.getIngredients() + ", Sprinkles";
  }
}

class WithSugar extends CoffeeDecorator {
  constructor(private readonly c: Coffee) {
    super(c);
  }

  getCost() {
    return super.getCost() + 1;
  }

  getIngredients() {
    return super.getIngredients() + ", Sugar";
  }
}

class Barista {
  constructor(private readonly cupOfCoffee: Coffee) {}

  orders() {
    this.orderUp(this.cupOfCoffee);
    let cup: Coffee = new WithMilk(this.cupOfCoffee);
    this.orderUp(cup);
    cup = new WithSugar(cup);
    this.orderUp(cup);
    cup = new WithSprinkles(cup);
    this.orderUp(cup);
  }

  private orderUp(c: Coffee) {
    console.log(
     "Cost: " + c.getCost() + "; Ingredients: " + c.getIngredients()
    );
  }
}

const barista = new Barista(new SimpleCoffee());
barista.orders();
