const prompt = require('prompt-sync')();

// Entrada
const dolar = Number(prompt('digite o valor do dolar: '))

// Processamento
const Reais = dolar * 5.28

// Saida
console.log('É equivalente: ', Reais,'reais')