const personFactory = (name, age) => {
  const sayHello = () => console.log('hello')
  return {name, age, sayHello}
}

const jeff = personFactory('jeff', 27)

// console.log(jeff.name) // 'Jeff'
// jeff.sayHello() // 'hello'

const Player = (name, level) => {
  let health = level * 2
  const getHealth = () => health
  const getLevel = () => level
  const getName = () => name
  const die = () => {
    console.log('Player is dead')
  }
  const damage = x => {
    health -= x
    if (health <= 0) {
      die()
    }
  }
  const attack = enemy => {
    if (level < enemy.getLevel()) {
      damage(1)
      console.log(`${enemy.getName()} has damaged ${name}`)
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1)
      console.log(`${name} has damaged ${enemy.getName()}`)
      console.log(`${enemy.getName()} has ${enemy.getHealth()} health remaining.`)
    }
  } 
  return {attack, damage, getLevel, getName, getHealth}
}

const jimmie = Player('jim', 10)
const badGuy = Player('jeff', 5)

// jimmie.attack(badGuy)

const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`)
  return {sayName}
}

const Nerd = (name) => {
  const {sayName} = Person(name) // this allows us to pull only the sayName form the person factory
  const doNerdyStuff = () => console.log('im a nerd')

  return {sayName, doNerdyStuff}
}

const jeffery = Nerd('jeff')
// jeffery.sayName()
// jeffery.doNerdyStuff()

const Nerd2 = (name) => {
  const protoype = Person(name)
  const doSomethingEvenNerdier = () => console.log('im a big nerd')
  // this will take all of the Person factory and add it to this factory
  return Object.assign({}, protoype, {doSomethingEvenNerdier})
}

