//7. Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. 
//Considerar que a média é ponderada e que o peso das notas é 4 e 6.

const prompt = require('prompt-sync')();

function calcularMedia(nota1, nota2) {
    const pesoNota1 = 4;
    const pesoNota2 = 6;
    const media = (nota1 * pesoNota1 + nota2 * pesoNota2) / (pesoNota1 + pesoNota2);
    return media;
}

const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));

const mediaFinal = calcularMedia(nota1, nota2);

console.log("A média final é:", mediaFinal.toFixed(2));
