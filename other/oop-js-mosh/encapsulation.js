// Encapsululation - reduces complexity and increases reusability

// option 1 - procedural
let baseSalary = 30000
let overtime = 10
let rate = 20

function getWage(baseSalary, overTime, rate) {
  return baseSalary + overtime * rate
}

// option 2 - object literal, encapsulation
// all variables and methods are encapsulated into the object
const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate
  }
}

console.log(employee)
