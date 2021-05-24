const prompt = require('prompt-sync')();

// Inicio 
const num_1 = Number(prompt('digite aqui um numero de 2 digito: '))

const unidade = Math.trunc(num_1 / 100)
const resto = (num_1 % 100)
const dezena = Math.trunc(resto / 10)
const centena = (resto % 10)
const invertido = (dezena * 100 + unidade * 1)

console.log('o resultado invertido é: ', invertido)

// Desenvolvimento
