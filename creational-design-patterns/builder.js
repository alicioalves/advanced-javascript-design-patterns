/* 
The builder pattern is a design pattern designed to provide a flexible 
solution to various object creation problems in object-oriented programming.
*/

class Person {
  constructor() {
    this.streetAddress = this.postCode = this.city = ""
    this.companyName = this.position = ""
    this.annualIncome = 0
  }
  toString() {
    return `Person lives at
        ${this.streetAddress}, ${this.city}, ${this.postCode}
        and works at ${this.companyName} as a
        ${this.position} earning ${this.annualIncome}
        `
  }
}

class PersonBuilder {
  constructor(person = new Person()) {
    this.person = person
  }

  get lives() {
    return new PersonAddressBuilder(this.person)
  }

  get works() {
    return new PersonJobBuilder(this.person)
  }

  build() {
    return this.person
  }
}

class PersonAddressBuilder extends PersonBuilder {
  constructor(person) {
    super(person)
  }

  at(streetAddress) {
    this.person.streetAddress = streetAddress
    return this
  }
  withPostCode(postCode) {
    this.person.postCode = postCode
    return this
  }
  in(city) {
    this.person.city = city
    return this
  }
}

class PersonJobBuilder extends PersonBuilder {
  constructor(person) {
    super(person)
  }

  at(companyName) {
    this.person.companyName = companyName
    return this
  }
  asA(position) {
    this.person.position = position
    return this
  }
  earning(annualIncome) {
    this.person.annualIncome = annualIncome
    return this
  }
}

let personBuilder = new PersonBuilder()
let person = personBuilder.lives
  .at("ABC Road")
  .in("Multan")
  .withPostCode("66000")
  .works.at("Octalogix")
  .asA("Engineer")
  .earning(10000)
  .build()

console.log(person.toString())
