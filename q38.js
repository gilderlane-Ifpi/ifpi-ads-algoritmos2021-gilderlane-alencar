const prompt = require('prompt-sync')();

// Entrada
const fração = Number(prompt('Digite uma fração: '))
const fraçao2 = Number(prompt('Digite outra fração: '))

// Processamento
const soma = Math.pow(fração + fraçao2)

// Final
console.log('O resultado da soma é: ', soma)