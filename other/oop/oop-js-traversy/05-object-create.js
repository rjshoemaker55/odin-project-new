// Object of protos
const bookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}.`
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year
    return `${this.title} was written ${years} years ago.`
  }
}

// Create object
const book1 = Object.create(bookProtos)
book1.title = 'Book One'
book1.author = 'John Doe'
book1.year = 2018

const book2 = Object.create(bookProtos, {
  title: { value: 'Book Two' },
  author: { value: 'John Doe' },
  year: { value: 2019 }
})

console.log(book1)
console.log(book2)
