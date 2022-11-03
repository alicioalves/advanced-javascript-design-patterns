/**
 * The state pattern is a behavioral software design pattern that allows an object 
 * to alter its behavior when its internal state changes. This pattern is close to 
 * the concept of finite-state machines.
 */

class State {
  constructor () {
    if (this.constructor === State) throw new Error('abstract!')
  }

  on (sw) {
    console.log('Light is already on.')
  }

  off (sw) {
    console.log('Light is already off.')
  }
}

class OnState extends State {
  constructor () {
    super()
    console.log('Light turned on.')
  }

  off (sw) {
    console.log('Turning light off...')
    sw.state = new OffState()
  }
}

class OffState extends State {
  constructor () {
    super()
    console.log('Light turned off.')
  }

  on (sw) {
    console.log('Turning light on...')
    sw.state = new OnState()
  }
}

class Switch {
  constructor () {
    this.state = new OffState()
  }

  on () {
    this.state.on(this)
  }

  off () {
    this.state.off(this)
  }
}

// Let's use Switch class
const lightSwitch = new Switch()
lightSwitch.on()
lightSwitch.off()