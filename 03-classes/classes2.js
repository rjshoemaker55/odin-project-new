// person example with function constructor
function Person(firstName, lastName) {
  // to create a private variable, set it without "this"
  const secret = 'secret variable!'

  this.firstName = firstName
  this.lastName = lastName

  this.fullName = function () {
    return this.firstName + ' ' + this.lastName
  }

  this.setFirstName = function (newFirstName) {
    this.firstName = newFirstName
  }

  this.setLastName = function (newLastName) {
    this.lastName = newLastName
  }

  this.getSecret = function () {
    return secret
  }
}
