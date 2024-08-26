import { onSnake, expandSnake } from '/snake.js'
import{ randomGridPosition } from '/grid.js'

let food = getRandomFoodPosition()
const EXPANSION_RATE = 5

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
  }
}

export function draw(gameBoard) {
  const foodElement = document.creatorElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classlist.add('food')
  gameboard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}
