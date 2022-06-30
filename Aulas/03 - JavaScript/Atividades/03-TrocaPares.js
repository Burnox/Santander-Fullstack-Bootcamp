var numeros = [1, 3, 4, 6, 23, 33, 80, 90]
var vazio = []

function TrocaPares(array) {
  if (!array.length) return -1

  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    if (element % 2 == 0) {
      array[i] = 0
    }
  }

  return array
}

console.log(TrocaPares(vazio))
