/**
 * The memento pattern is a software design pattern that provides the ability 
 * to restore an object to its previous state. The memento pattern is implemented 
 * with three objects: the originator, a caretaker and a memento.
 */

class Memento {
  constructor (balance) {
    this.balance = balance
  }
}

// Adding bank account
class BankAccount {
  constructor (balance = 0) {
    this.balance = balance
  }

  deposit (amount) {
    this.balance += amount
    return new Memento(this.balance)
  }

  restore (m) {
    this.balance = m.balance
  }

  toString () {
    return `Balance: ${this.balance}`
  }
}

// Let's use this class for example
const bankAccount = new BankAccount(100)
const m1 = bankAccount.deposit(50)
console.log(bankAccount.toString())

// Restore to m1
bankAccount.restore(m1)
console.log(bankAccount.toString())