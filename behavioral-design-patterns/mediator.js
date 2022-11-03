/**
 * The mediator pattern defines an object that encapsulates how a set of objects interact. 
 * This pattern is considered to be a behavioral pattern due to the way it can alter the program’s 
 * running behavior. In object-oriented programming, programs often consist of many classes.
 */

class Person {
  constructor (name) {
    this.name = name
    this.chatLog = []
  }

  receive (sender, message) {
    const chatMessage = `${sender}: ${message}`
    console.log(`[${this.name}'s chat session] ${chatMessage}`)
    this.chatLog.push(chatMessage)
  }

  say (message) {
    this.room.broadcast(this.name, message)
  }

  pm (who, message) {
    this.room.message(this.name, who, message)
  }
}

class ChatRoom {
  constructor () {
    this.people = []
  }

  broadcast (source, message) {
    for (let person of this.people)
      if (person.name !== source) person.receive(source, message)
  }

  join (person) {
    const joinMessage = `${person.name} joins the chat`
    this.broadcast('room', joinMessage)
    person.room = this
    this.people.push(person)
  }

  message (source, destination, message) {
   
    for (let person of this.people)
      if (person.name === destination.name) person.receive(source, message)
  }
}

const room = new ChatRoom()

const john = new Person('John')
const tony = new Person('Tony')

room.join(john)
room.join(tony)
john.say('Hello!')

const doe = new Person('Doe')
room.join(doe)
doe.say('Hello everyone!')

john.pm(tony, 'Sup?')