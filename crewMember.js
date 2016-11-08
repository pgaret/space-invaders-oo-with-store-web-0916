const CrewMember = (function createCrewMember() {
  // var id = 0
  return class CrewMember{

    constructor(crewHash) {
      this.id = crewHash['id']
      this.position = crewHash['position']
      this.currentShip = "Looking for a Rig"
      Store.data.crewMembers.push(this)
    }


      // else {
      //   return Store.spaceships.filter((ship)=> { return this.ship_id === ship.id})
      //
    engageWarpDrive() {
      if (!this.spaceshipId) {
        return "had no effect"
      }
      else if (this.position === "Pilot") {
        this.currentShip.warpDrive = "engaged!"
      }
      else {
        return "You are not worthy"
      }
    }
    setsInvisibility() {
      if (!this.spaceshipId) {
        return "had no effect"
      }
      else if (this.position === "Defender") {
        this.currentShip.cloaked = true
      }
      else {
        return "You are not worthy"
      }
    }
    chargePhasers() {
      if (!this.spaceshipId) {
        return "had no effect"
      }
      else if (this.position === "Gunner") {
        this.currentShip.phasersCharge = "charged!"
      }
      else {
        return "You are not worthy"
      }
    }
    assignShip(spaceship) {
      this.spaceshipId = spaceship.id
      spaceship.docked = false
      this.currentShip = Store.data.spaceships.filter((ship)=> { return this.spaceshipId === ship.id})[0]
    }
  }
}())
