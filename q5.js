const prompt = require('prompt-sync')();

// entrada
const numero = Number(prompt('Digite aqui o numero de 3 digitos: '))

// Processo
const centena = Math.trunc(numero / 100)
const resto_1 = numero % 100
const dezena = Math.trunc(resto_1 / 10)
const unidade = resto_1 % 10
const resultado = (centena + dezena + unidade)

// Saida
console.log('Resultado: ', resultado)