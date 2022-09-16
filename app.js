const board = document.querySelector('#board')
const SQUARES_NUMBER = 450
const color = ['#00FA9A', '#00FF7F', '#00FF00', '#7CFC00', '#7FFF00', '#ADFF2F']

for (let i=0; i < SQUARES_NUMBER; i++) {
   const square = document.createElement('div')
   square.classList.add('square')

   square.addEventListener('mouseover', () =>
   setColor(square))

   square.addEventListener('mouseleave', () =>
   removeColor(square))

   board.append(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.backgroundColor = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.backgroundColor = '#1d1d1d'
   element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
   const index = Math.floor(Math.random()*color.length)
   console.log(index)
   return color[index]
}