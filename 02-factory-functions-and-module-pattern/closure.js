const counterCreator = () => {
  let count = 0

  return () => {
    console.log(`curent count: ${count}`)
    count++
  }
}

const counter = counterCreator()

// counter is a closure, it has access to the count variable
// because it has access to everything from counterCreator
counter()
counter()
counter()