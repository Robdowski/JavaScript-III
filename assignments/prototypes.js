/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(att) {
  this.createdAt = att.createdAt;
  this.name = att.name;
  this.dimensions = att.dimensions;
}
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(att) {
  GameObject.call(this, att);
  this.healthPoints = att.healthPoints;
  this.name = att.name
}

CharacterStats.prototype = Object.create(GameObject.prototype)
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(att) {
  CharacterStats.call(this, att);
  this.team = att.team;
  this.weapons = att.weapons;
  this.language = att.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} returns a greeting in ${this.language}`;
};

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!


function Villain(att){
  Humanoid.call(this, att)
  this.evil = att.evil
  this.city = att.city
  this.enemy = att.enemy
}

Villain.prototype = Object.create(Humanoid.prototype)
Villain.prototype.evilPlan = function(){
  return `${this.name} is plotting to destroy ${this.city}.`
}
Villain.prototype.bigMistake = function(){
  return `What an idiot! ${this.name} is giving an absurdly long monologue instead of using ${this.weapons}, giving ${this.enemy} time to plan.`
}

function Hero(att){
  Humanoid.call(this, att)
  this.good = att.good
  this.city = att.city
  this.enemy = att.enemy
}

Hero.prototype = Object.create(Humanoid.prototype)
Hero.prototype.batSignal = function(){
  return `${this.name} has been alerted that a Villain is present in ${this.city}.`
}
Hero.prototype.exile = function(){
  return `${this.name} picks ${this.enemy} up by his underwear and sends ${this.enemy} hurdling through space into the sun. Yeah, ${this.name} kills.`
}

const batman = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 6
  },
  healthPoints: 20,
  name: "Bruce Wayne",
  team: "Gotham",
  weapons: "Batarang",
  language: "English",
  city: "Gotham",
  good: "65%",
  enemy: "The Joker",
});

const joker = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 5
  },
  healthPoints: 12,
  name: "The Joker",
  team: "Gotham Underbelly",
  weapons: "Bomb",
  language: "English",
  city: "Gotham",
  evil: "98%",
  enemy: "Batman",
});

console.log(joker.evilPlan())
console.log(batman.batSignal())
console.log(joker.bigMistake())
console.log(batman.exile())