// When you have a specific type of object that you need
// to duplicate like our player or inventory items,
// a better way to create them is using an object constructor,
// which is a function that looks like this:

function Player(name, marker) {
  this.name = name
  this.marker = marker
}

const player1 = new Player('steve', 'X')
console.log(player1.name) // 'steve'

// Write a constructor for making “Book” objects.
//  We will revisit this in the project at the end of this lesson.
// Your book objects should have the book’s title,
// author, the number of pages, and whether or not you have read the book.

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    return `${this.title} by ${this.author}, ${pages} pages, ${
      read ? "you've read this" : 'not read yet'
    }.`
  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true)
console.log(theHobbit.info())
// The hobbit jrr tolkien, 295 pages, youve read this
