//5. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do 
//distribuidor e dos impostos (aplicados ao custo de fábrica). Escreva um script para ler o custo de 
//fábrica de um carro, a porcentagem do distribuidor e o
// imposto, e calcular e escrever o custo final ao consumidor

const prompt = require('prompt-sync')();

function calcularCustoFinal(custoFabrica, porcentagemDistribuidor, impostos) {
    const porcentagemDistribuidorDecimal = porcentagemDistribuidor / 100;
    const custoDistribuidor = custoFabrica * porcentagemDistribuidorDecimal;
    const valorImpostos = custoFabrica * (impostos / 100);

    const custoFinal = custoFabrica + custoDistribuidor + valorImpostos;
    return custoFinal;
}

const custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro: "));
const porcentagemDistribuidor = parseFloat(prompt("Digite a porcentagem do distribuidor (%): "));
const impostos = parseFloat(prompt("Digite a porcentagem de impostos (%): "));

const custoFinal = calcularCustoFinal(custoFabrica, porcentagemDistribuidor, impostos);

console.log("O custo final é:", custoFinal.toFixed(2));
