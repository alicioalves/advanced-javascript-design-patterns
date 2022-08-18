/*
    In object-oriented programming, the command pattern is a behavioral design pattern in which an object 
    is used to encapsulate all information needed to perform an action or trigger an event at a later time. 
    This information includes the method name, the object that owns the method and values for the method parameters.
*/

class BankAccount {
  constructor(balance = 0) {
    this.balance = balance
  }
  deposit(amount) {
    this.balance += amount
    console.log(`Deposited ${amount}`)
    console.log(`Total Balance ${this.balance}`)
  }
  withdraw(amount) {
    if (this.balance - amount >= BankAccount.overdraftLimit) {
      this.balance -= amount
      console.log(`Withdrawn ${amount}`)
    }
  }
  toString() {
    return `Balance ${this.balance}`
  }
}

BankAccount.overdraftLimit = -500

// Commands

let Action = Object.freeze({
  deposit: 1,
  withdraw: 1
})

class BankAccountCommand {
  constructor(account, action, amount) {
    this.account = account
    this.action = action
    this.amount = amount
  }

  call() {
    switch (this.action) {
      case Action.deposit:
        this.account.deposit(this.amount)
        break
      case Action.withdraw:
        this.account.withdraw(this.amount)
        break
    }
  }
  undo() {
    switch (this.action) {
      case Action.deposit:
        this.account.withdraw(this.amount)
        break
      case Action.withdraw:
        this.account.deposit(this.amount)
        break
    }
  }
}

// Usage

let bankAccount = new BankAccount(100)
let cmd = new BankAccountCommand(bankAccount, Action.deposit, 50)

cmd.call()
console.log(bankAccount.toString())

cmd.undo()
console.log(bankAccount.toString())
