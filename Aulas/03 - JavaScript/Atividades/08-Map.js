const numeros = [1, 2, 3]
const banana = {
  value: 2
}

function mapThis(arr, thisArg) {
  return arr.map(function (item) {
    return item * this.value
  }, thisArg)
}

function mapSemThis(arr) {
  return arr.map(function (item) {
    return item * 2
  })
}

console.log(`this -> banana`, mapThis(numeros, banana))

console.log(`map sem this`, mapSemThis(numeros))
