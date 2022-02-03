// Constructor
function Book(title, author, year) {
  console.log('Book initialized')
  this.title = title
  this.author = author
  this.year = year
}

// getSummary prototype method

// placing it in the prototype ensures that only ONE getSummary
// function is created, instead of one for every book.
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}.`
}

// getAge prototype method
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year

  return `${this.title} was written ${years} years ago.`
}

// revise / change year protorype method
Book.prototype.revise = function (newYear) {
  this.year = newYear
  this.revised = true
}

// Instantiate an object
const book1 = new Book('Book One', 'John Doe', 2013)
const book2 = new Book('Book Two', 'John Bee', 2016)

console.log(book1)
book1.revise(2018)

console.log(book1)
