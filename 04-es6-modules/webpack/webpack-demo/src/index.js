import _ from 'lodash'
import printMe from './print'

function component() {
  const element = document.createElement('div')
  const btn = document.createElement('button')

  element.textContent = 'RJ'
  element.classList.add('hell0')

  btn.textContent = 'Click me and check the console'
  btn.onclick = printMe

  element.appendChild(btn)
  return element
}

document.body.appendChild(component())
