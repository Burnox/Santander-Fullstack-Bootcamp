/*  Criar uma função que recebe dois números (a e b).
    Conferir se os números são iguais.
    Conferir se a soma é maior que 10 e menor que 20.
    Retornar String "Os números 'a' e 'b' não são/são iguais. Sua soma é 'soma', que é maior/menor que 10 e maior/menor que 20. */

var a = 5
var b = 6

function Compara(a, b) {
  return a === b
    ? `Os números ${a} e ${b} são iguais`
    : `Os números ${a} e ${b} não são iguais`
}

function Soma(a, b) {
  const soma = a + b
  const mm10 = soma > 10 ? 'maior' : 'menor'
  const mm20 = soma > 20 ? 'maior' : 'menor'

  return `Sua soma é ${soma}, que é ${mm10} que 10 e ${mm20} que 20`
}

console.log(`${Compara(a, b)}. ${Soma(a, b)}.`)
