function userCreator(name, score) {
  // creates a new empty object with the functionStore as the prototype
  const newUser = Object.create(functionStore, { age: { value: 24 } })
  newUser.name = name
  newUser.score = score
  return newUser
}

const functionStore = {
  increment: function () {
    this.score++
  },
  login: function () {
    console.log('Logged in')
  }
}

const user1 = userCreator('RJ', 10)

user1.increment()
