/**
 * The visitor design pattern is a way of separating an algorithm from an object structure 
 * on which it operates. A practical result of this separation is the ability to add new 
 * operations to existing object structures without modifying the structures.
 */

class NumberExpression {
  constructor (value) {
    this.value = value
  }

  print (buffer) {
    buffer.push(this.value.toString())
  }
}

// Creating Addition Expression
class AdditionExpression {
  constructor (left, right) {
    this.left = left
    this.right = right
  }

  print (buffer) {
    buffer.push('(')
    this.left.print(buffer)
    buffer.push('+')
    this.right.print(buffer)
    buffer.push(')')
  }
}

// That's how we will use this,
// given expression => 5 + (1+9)

const e = new AdditionExpression(
  new NumberExpression(5),
  new AdditionExpression(
    new NumberExpression(1),
    new NumberExpression(9)
  )
)

const buffer = []
e.print(buffer)
console.log(buffer.join(''))