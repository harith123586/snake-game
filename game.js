import { update as updateSnake, draw as drawSnake, SNAKE_SPEED,
getSnakeHead, snakeintersection } from './grid.js'
import { update as updateFood, drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Press ok to restart.')) {
     window.location = '/'
    }
    return
  }

  
window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSincelastRender < 1 / SNAKE_SPEED) return

  
lastRenderTime = currentTime

update()
draw()
}

window.requestAnimationFrame(main)

function uodate() {
  updateSnake()
  updateFood()
  checkDeath()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
