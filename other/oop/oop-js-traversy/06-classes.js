class Book {
  constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}.`
  }

  getAge() {
    return `${this.title} is ${new Date().getFullYear() - this.year} years old.`
  }

  revise(newYear) {
    this.year = newYear
    this.revised = true
  }

  // creates a method on a class that you can use without instantiating an object
  // should not be used for any data specific to an object
  static topBookStore() {
    return 'Barns & Noble'
  }
}

// Instantiate object
const book1 = new Book('Book One', 'John Doe', 2018)

// console.log(book1)
// book1.revise(2021)
// console.log(book1.getAge())

console.log(Book.topBookStore())
