const numberDisplayed = document.getElementById('display')
const subtrair = document.getElementById('subt')
const somar = document.getElementById('add')
var currentNumber = 0

subtrair.addEventListener('click', function decrement() {
  currentNumber = currentNumber - 1
  numberDisplayed.innerHTML = currentNumber
  changeColor()
})

somar.addEventListener('click', function increment() {
  currentNumber = currentNumber + 1
  numberDisplayed.innerHTML = currentNumber
  changeColor()
})

function changeColor() {
  if (currentNumber > 0) {
    numberDisplayed.style.color = 'green'
  } else if (currentNumber < 0) {
    numberDisplayed.style.color = 'red'
  } else {
    numberDisplayed.style.color = 'black'
  }
}

// function decrement() {
//   currentNumber = currentNumber - 1
//   numberDisplayed.innerHTML = currentNumber
// }

// function increment() {
//   currentNumber = currentNumber + 1
//   numberDisplayed.innerHTML = currentNumber
// }
