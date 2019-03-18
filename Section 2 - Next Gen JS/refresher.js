// Normal JS syntax
function myFunq() {
  console.log('Mah funq!')
}

const myFunction = (hello) => {
  console.log('Modern func ' + hello)
}

// this inside an arrow function keeps its execution context at execution.  

myFunq()

myFunction('Taddes')

// Exports and Imports

/* 
Typical syntax for imports
import util from './utils.js

import { horse } from './horse.js'
import { horse as hrs } from './horses.js

*/

// Classes
//////////////

/* 

Blueprint for JavaScript objects, containg properties and methods (functions)

*/
class Human {
  constructor() {
    this.gender = 'Male'
  }
  printGender() {
    console.log(this.gender)
  }
}

class Person extends Human {
  // Constructor will be called anytime you instantiate a class
  constructor() {
    // If instantiating a constructor when a class is extended, must call super. 
    // Super method instantiates parent constructor, properly initializing parent class.
    super();
    this.name = 'Taddes'
  }
  printMyName() {
    console.log(this.name)
  }
}

const myPerson = new Person()
myPerson.printMyName()
myPerson.printGender()

// ES7 Approach to skip constructor function call
//  class Tiger {
//    name = ' Tiger';
//    stripes = 'Many';
//    printStripes = () =>  console.log(`There are this ${this.stripes} stripes`)
//  }

//  class Cat extends Tiger {
//    name = 'Pepper';
//    stripes = 'Stripey';

//    printTigStripes = () => console.log('STRIPES')
//  }

//  const pepper = new Cat();
//  pepper.printTigStripes();
//  pepper.printStripes();


// Spread/Rest operator
//======================
// Spread 'speads' out elements from another array/object to create another
const oldArray = [1,2,3,4,5,6]
const newArray = [...oldArray, 7, 8, 9]

console.log({newArray})

// Rest operator merges a list of function arguments into an array
function sortArgs(...args) {
  return args.sort()
}

const kark = {
  name: 'Captain Kark'
};

const newKark = {
  ...kark,
  age: 52
}

console.log({newKark})

const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1,2,3))

// Array MAP
const numbers = [1,2,3,4,5,6]

const doubleNumbers = numbers.map(num => num * 2)
console.log({doubleNumbers})