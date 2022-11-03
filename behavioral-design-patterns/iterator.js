/**
 * In object-oriented programming, the iterator pattern is a design pattern in which an iterator 
 * is used to traverse a container and access the container’s elements.
 */

class Stuff {
  constructor () {
    this.a = 11
    this.b = 22
  }

  [Symbol.iterator] () {
    let i = 0
    const self = this
    return {
      next: function () {
        return {
          done: i > 1,
          value: self[i++ === 0 ? 'a' : 'b']
        }
      }
    }
  }

  get backwards () {
    let i = 0
    const self = this
    return {
      next: function () {
        return {
          done: i > 1,
          value: self[i++ === 0 ? 'b' : 'a']
        }
      },
      // make iterator iterable
      [Symbol.iterator]: function () { return this }
    }
  }
}

const stuff = new Stuff()

for (let item of stuff)
  console.log(item)

for (let item of stuff.backwards)
  console.log(item)