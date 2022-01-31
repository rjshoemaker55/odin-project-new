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

// Magazine constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year)

  this.month = month
}

// Inherit prototype

// adds the prototpye of book onto the Magazine
Magazine.prototype = Object.create(Book.prototype)

// Instantiate Magazine
const magazine1 = new Magazine('Coder Magazine', 'John Doe', 2018, 'January')

// Use magazine constructor
Magazine.prototype.constructor = Magazine

console.log(magazine1)
