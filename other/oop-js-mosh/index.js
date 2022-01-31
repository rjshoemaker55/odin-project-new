// object literal syntax
const circle = {
  // property
  radius: 1,
  // property
  location: {
    x: 1,
    y: 1
  },
  // method
  draw: function () {
    console.log('draw', this.location.x, this.location.y)
  }
}

// factory function syntax
function createCircle(radius) {
  return {
    // property
    radius: radius,
    // method
    draw: function () {
      console.log('draw', this.radius)
    }
  }
}

// constructor function
function Circle(radius) {
  this.radius = radius
  this.draw = function () {
    console.log('draw', this.radius)
  }
}

const circle3 = new Circle(1)
circle3.draw()
console.log(circle3)
