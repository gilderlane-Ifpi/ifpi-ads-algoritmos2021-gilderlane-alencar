const prompt = require('prompt-sync')();

// Inicio
const num_1 = Number(prompt('Digite algum numero: '))
const num_2 = Number(prompt('digite algum numero: '))
const num_3 = Number(prompt('digite algum numero: '))

// Desenvolvimento
const soma = num_1 + num_2
const diferença = num_2 - num_3

// Final
console.log('A soma dos dois primeiros é: ', soma)
console.log('A diferença dos dois ultimos é: ', diferença)