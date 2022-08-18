/*
    In object-oriented design, the chain-of-responsibility pattern is a design pattern 
    consisting of a source of command objects and a series of processing objects.
*/

class Creature {
  constructor(name, attack, defense) {
    this.name = name
    this.attack = attack
    this.defense = defense
  }
  toString() {
    return `${this.name} (${this.attack}/${this.defense})`
  }
}

class CreatureModifier {
  constructor(creature) {
    this.creature = creature
    this.next = null
  }
  add(modifier) {
    if (this.next) this.next.add(modifier)
    else this.next = modifier
  }
  handle() {
    if (this.next) this.next.handle()
  }
}

class NoBonusesModifier extends CreatureModifier {
  constructor(creature) {
    super(creature)
  }
  handle() {
    console.log("No bonuses for you!")
  }
}

// Increase Attack

class DoubleAttackModifier extends CreatureModifier {
  constructor(creature) {
    super(creature)
  }
  handle() {
    console.log(`Doubling ${this.creature.name}'s attack`)
    this.creature.attack *= 2
    super.handle()
  }
}

// Increase Defense

class IncreaseDefenseModifier extends CreatureModifier {
  constructor(creature) {
    super(creature)
  }
  handle() {
    if (this.creature.attack <= 2) {
      console.log(`Increasing ${this.creature.name}'s defense`)
      this.creature.defense++
    }
    super.handle()
  }
}

let charizard = new Creature("Charizard", 1, 1)
console.log(charizard.toString())

let root = new CreatureModifier(charizard)
root.add(new DoubleAttackModifier(charizard))
root.add(new IncreaseDefenseModifier(charizard))
root.handle()

console.log(charizard.toString())
