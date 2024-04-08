//3. Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
//Calcular e escrever o valor do novo salário.

const prompt = require('prompt-sync')();

function calcularNovoSalario(salarioAtual, percentualReajuste) {
    const valorReajuste = salarioAtual * (percentualReajuste / 100);
    const novoSalario = salarioAtual + valorReajuste;
    return novoSalario;
}

const salarioAtual = parseFloat(prompt("Digite o salário mensal atual do funcionário: "));
const percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste (%): "));

const novoSalario = calcularNovoSalario(salarioAtual, percentualReajuste);

console.log("O novo salário é:", novoSalario.toFixed(2));
