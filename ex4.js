/*4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do 
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor
 seja de 28% e os impostos de 45%, escrever um script para ler o custo de fábrica de um carro, calcular e 
 escrever o custo final ao consumidor.*/

 const prompt = require('prompt-sync')();

const percentualDistribuidor = 28; // 28%
const percentualImpostos = 45; // 45%

function calcularCustoFinal(custoFabrica) {
    const distribuidor = custoFabrica * (percentualDistribuidor / 100);
    const impostos = custoFabrica * (percentualImpostos / 100);
    const custoFinal = custoFabrica + distribuidor + impostos;
    return custoFinal;
}

const custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro: "));
const custoFinal = calcularCustoFinal(custoFabrica);

console.log("O custo final é:", custoFinal.toFixed(2));
