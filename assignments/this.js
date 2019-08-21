/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - called in the global scope and is bound to nothing else.
* 2. Implicit binding -  called as a method of the object
* 3. Explicit binding - called using a function of .apply() .call() or .bind()
* 4. NEW binding - called by using an Object constructor and the keyword new
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

/*
function ghost(){
    console.log(this.boo)
} 

const boo = "Boo"
  
ghost()
*/

// Principle 2

// code example for Implicit Binding

/*

const pet = {
  name: 'Frank',
  species: 'turtle',
  pronoun: 'he',
  favFood: 'Lettuce',
  eat: function(){
    return `${this.name} is a ${this.species} and ${this.pronoun} likes to eat ${this.favFood}`;
  }
}
console.log(pet.eat());

*/

// Principle 3

// code example for New Binding

/*

function Ghost(saying){
  this.thing = saying
}

let theGhost = new Ghost("Casper the friendly Ghost!!")


console.log(theGhost.thing)

*/



// Principle 4

// code example for Explicit Binding

/*
function ghost(){
  console.log(this.boo)
}

let myGhost = {
  name: "Casper",
  boo: "BooOOoOo!",
}

ghost.call(myGhost)

*/
