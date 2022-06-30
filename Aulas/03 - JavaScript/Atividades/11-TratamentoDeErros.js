const arrayN = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arrayS = ['bruno', 'renata', 'mayara']
const arrayO = [
  {
    nome: 'habib'
  },
  {
    nome: 'sofia'
  },
  {
    nome: 'estrela'
  }
]

function testeArray(arr, num) {
  try {
    if (!arr || !num) throw new ReferenceError('Envie os parâmetros')
    if (typeof arr !== 'object')
      throw new TypeError('Array não é do tipo object')
    if (typeof num !== 'number') throw new TypeError('Número inválido')
    if (arr.length !== num) throw new RangeError('Tamanho do array inválido')

    return arr
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log(error.message)
    } else if (error instanceof TypeError) {
      console.log(error.message)
    } else if (error instanceof RangeError) {
      console.log(error.message)
    } else {
      console.log('Tipo de erro não esperado: ' + error)
    }
  }
}

console.log(testeArray(arrayN, 9))
