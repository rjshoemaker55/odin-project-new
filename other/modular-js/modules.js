// object literal
const myModule = {
  name: 'Will',
  age: 26,
  sayName: function() {
    console.log(this.name)
  },
  setName: function(newName) {
    this.name = newName
  }
}

// myModule.setName('RJ')
// myModule.sayName()

// self executing annonymous function
const people = (function () {

  // the name variable is private because it is not returned
  let name = 'Will'

  function sayName () {
    console.log(name)
  }

  // sayName is public because it is returned
  return {
    sayName: sayName
  }
})()

people.sayName()