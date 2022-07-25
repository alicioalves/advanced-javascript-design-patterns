/*
The composite pattern describes a group of objects that are treated the same 
way as a single instance of the same type of object.
*/

class Employer {
  constructor(name, role) {
    this.name = name
    this.role = role
  }
  print() {
    console.log(`name: ${this.name} relaxTime: `)
  }
}

class EmployerGroup {
  constructor(name, composite = []) {
    console.log(name)
    this.name = name
    this.composites = composite
  }
  print() {
    console.log(this.name)
    this.composites.forEach((emp) => {
      emp.print()
    })
  }
}

let ravi = new Employer("ravi", "developer")
let bhavy = new Employer("bhavi", "developer")
let groupDevelopers = new EmployerGroup("Developers", [ravi, bhavy])
