/*6. Uma revendedora de carros usados paga a seus funcionários vendedores um salário 
fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das 
vendas por ele efetuadas. Escrever um script que leia o número de carros por ele vendidos, o 
valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva
 o salário final do vendedor*/

const prompt = require('prompt-sync')();

function calcularSalarioFinal(numeroCarrosVendidos, valorTotalVendas, salarioFixo, valorPorCarro) 
{
    const comissaoPorCarro = valorPorCarro;
    const comissaoSobreVendas = valorTotalVendas * 0.05;

    const salarioFinal = salarioFixo + (numeroCarrosVendidos * comissaoPorCarro) + comissaoSobreVendas;
    return salarioFinal;
}

const numeroCarrosVendidos = parseInt(prompt("Digite o número de carros vendidos: "));
const valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas: "));
const salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor: "));
const valorPorCarro = parseFloat(prompt("Digite o valor recebido por carro vendido: "));

const salarioFinal = calcularSalarioFinal(numeroCarrosVendidos, valorTotalVendas, salarioFixo, valorPorCarro);
console.log("O salário final é:", salarioFinal.toFixed(2));
