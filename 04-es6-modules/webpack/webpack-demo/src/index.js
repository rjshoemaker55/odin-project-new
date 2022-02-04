import _ from 'lodash'

function component() {
  const element = document.createElement('div')

  element.textContent = 'RJ'
  element.classList.add('hell0')

  element.appendChild(myImage)
  return element
}

document.body.appendChild(component())
