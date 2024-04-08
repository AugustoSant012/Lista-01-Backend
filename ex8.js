
//8. Faça um script que determine o volume de uma caixa d’água cilíndrica, 
//sendo que o raio e a altura devem ser fornecidos.
//OBS: V = PI * Raio^2 * Altura

const prompt = require('prompt-sync')();

const PI = 3.14;

const raio = parseFloat(prompt('Digite o raio da caixa d agua: '));
const altura = parseFloat(prompt('Digite a altura da caixa d água '));

const volume = PI * Math.pow(raio, 2) * altura;

console.log('O volume da caixa d água é:', volume.toFixed(2));
