class Book {
  constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}.`
  }
}

// Magazine subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    // calls parent constructor (book)
    super(title, author, year)
    this.month = month
  }
}

// Instantiate magazine
const mag1 = new Magazine('Forbes', 'John Doe', 2016, 'February')

console.log(mag1)
