
//Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.

const prompt = require('prompt-sync')();

const num1 = parseFloat(prompt('Digite o primeiro número: '));
const num2 = parseFloat(prompt('Digite o segundo número: '));

const soma = num1 + num2;

const resultado = soma * num1;

console.log('A soma dos números é:', soma);
console.log('O resultado da multiplicação pelo primeiro número é:', resultado);
