/*
    The proxy pattern is a software design pattern. A proxy, in its most 
    general form, is a class functioning as an interface to something else.
*/

class Percentage {
  constructor(percent) {
    this.percent = percent
  }
  toString() {
    return `${this.percent}%`
  }
  valueOf() {
    return this.percent / 100
  }
}

let fivePercent = new Percentage(5)
console.log(fivePercent.toString())
console.log(`5% of 50 is ${50 * fivePercent}`)
