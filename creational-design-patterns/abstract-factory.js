/*
The abstract factory pattern provides a way to encapsulate a group of 
individual factories that have a common theme without specifying their concrete classes
*/

// Drink

class Drink {
  consume() {}
}

class Tea extends Drink {
  consume() {
    console.log("This is Tea")
  }
}

class Coffee extends Drink {
  consume() {
    console.log("This is Coffee")
  }
}

// Drink making machine

class DrinkFactory {
  prepare(amount) {}
}

class TeaFactory extends DrinkFactory {
  makeTea() {
    console.log("Tea Created")
    return new Tea()
  }
}

class CoffeeFactory extends DrinkFactory {
  makeCoffee() {
    console.log("Coffee created")
    return new Coffee()
  }
}

let teaDrinkFactory = new TeaFactory()
let tea = teaDrinkFactory.makeTea()
tea.consume()
