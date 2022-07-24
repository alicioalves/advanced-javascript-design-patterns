/*
In software engineering, the singleton pattern is a software design pattern 
that restricts the instantiation of a class to one “single” instance. This 
is useful when exactly one object is needed to coordinate actions across the system.
*/

class Singleton {
  constructor() {
    const instance = this.constructor.instance
    if (instance) {
      return instance
    }

    this.constructor.instance = this
  }

  say() {
    console.log("Saying...")
  }
}

let s1 = new Singleton()
let s2 = new Singleton()

console.log(`Are they the same? -> ${s1 === s2}`)

s1.say()
