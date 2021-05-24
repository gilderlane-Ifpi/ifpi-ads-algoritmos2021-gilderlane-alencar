const prompt = require('prompt-sync')();

// Entrada
const velocidade_km = Number(prompt('velocidade (km/h): '))

// Processamento
const velocidade_ms = velocidade_km / 3.6

// Saida
console.log('A velocidade', velocidade_km, 'km/h')
console.log('É Igual a', velocidade_ms, 'm/s')