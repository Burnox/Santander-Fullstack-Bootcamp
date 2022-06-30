const pessoa1 = {
  nome: 'Bruno',
  idade: 29
}

const pessoa2 = {
  nome: 'Mayara',
  idade: 30
}

const pessoa3 = {
  nome: 'Renata',
  idade: 49
}
const pessoa4 = {
  nome: 'Mara',
  idade: 50
}

function calcularIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`
}

console.log(calcularIdade.call(pessoa1, 20))
console.log(calcularIdade.call(pessoa2, 15))
console.log(calcularIdade.call(pessoa3, 6))
console.log(calcularIdade.call(pessoa4, 40))
