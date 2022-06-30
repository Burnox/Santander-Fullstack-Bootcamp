// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function soma(arr) {
//   return arr.reduce(function (preV, curV) {
//     return preV + curV
//   })
// }

// console.log(soma(numeros))

const lista = [
  {
    produto: 'molho de tomate',
    preco: 2.46
  },
  {
    produto: 'pao',
    preco: 7.58
  },
  {
    produto: 'peito de frango',
    preco: 16.99
  },
  {
    produto: 'coca-cola',
    preco: 2.47
  },
  {
    produto: 'gaurana',
    preco: 2.47
  },
  {
    produto: 'carne moida',
    preco: 29.99
  },
  {
    produto: 'macarrao',
    preco: 5.48
  },
  {
    produto: 'feijão',
    preco: 6.49
  }
]
const saldoInicial = 100

function compras(lista, saldo) {
  return lista.reduce(function (preV, curV) {
    return preV - curV.preco
  }, saldo)
}

console.log(compras(lista, saldoInicial))
