function verificaPalindromo(frase) {
  if (!frase) return 'Frase inexistente!'

  fraseLimpa = frase.toLowerCase().replace(/\s/g, '') //  \s -> remove os espaços em branco e deve ser posto entre / /. O g significa que é uma busca global.
  fraseReversa = fraseLimpa.split('').reverse().join('')

  var resultado = fraseLimpa === fraseReversa ? 'é' : 'não é'

  return `A frase "${frase}", ${resultado} um palíndromo!`
}

console.log(verificaPalindromo('roma me tem amor'))
