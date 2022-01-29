class UserClass {
  constructor(name) {
    this.name = name
  }
  sayHi() {
    say(this.name)
  }
}

//  rewriting class User in pure functions

// 1. Create constructor function
function User(name) {
  this.name = name
}

// a function prototype has "constructor" property by default,
// so we dont need to create it

// 2. Add the method to prototype
User.prototype.sayHi = function () {
  console.log(this.name)
}

let user = new User('John')
user.sayHi()

// Named class expression

// If a class expression has a name, its visible only inside the class
let namedUser = class NamedClass {
  sayHi() {
    console.log(NamedClass)
  }
}

// Another class example

class House {
  constructor(color) {
    this.color = color
  }

  getFurniture() {
    return 'sofa'
  }
}

const houseObject = new House('blue')
const houseObject2 = new House('red')

console.log(houseObject.color)
console.log(houseObject2)
