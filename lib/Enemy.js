const Character = require('../lib/Character')
const Potion = require('../lib/Potion')

class Enemy extends Character {
  constructor(name, weapon) {
    super(name);
    this.weapon = weapon;
    this.potion = new Potion();
  }
  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  }
}

// inherits prototype methods from Character here:
// Enemy.prototype = Object.create(Character.prototype)

module.exports = Enemy