/*
The prototype pattern is a creational design pattern in software development. 
It is used when the type of objects to create is determined by a prototypical 
instance, which is cloned to produce new objects.
*/

class Car {
  constructor(name, model) {
    this.name = name
    this.model = model
  }
  SetName(name) {
    console.log(`Name: ${name}`)
  }
  SetModel(model) {
    console.log(`Model: ${model}`)
  }
  clone() {
    return new Car(this.name, this.model)
  }
}

let car = new Car()
car.SetName("Audi")
car.SetModel("A4")

let car2 = car.clone()
car2.SetName("BMW")
car2.SetModel("X5")
