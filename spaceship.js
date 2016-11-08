const Spaceship = (function createSpaceship() {
  return class Spaceship{
    constructor(shipHash){
      this.id = shipHash['id']
      this.name = shipHash['name']
      this.shields = shipHash['shields']
      this.phasers = shipHash['phasers']
      this.cloaked = false
      this.warpDrive = "disengaged"
      this.docked = true
      this.phasersCharge = "uncharged"
      Store.data.spaceships.push(this)
    }

  }
}())
