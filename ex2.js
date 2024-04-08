/*Escreva um script para ler o número total de eleitores de um município, o número de votos brancos, 
nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.*/

//coloquei o valor porque n entendi se o usuario deveria colocar ou eu 

const votosBrancos = 50532
const votoNulo = 35300
const votoValido = 90425

const eleitores = votosBrancos + votoNulo + votoValido;
console.log('A quantidade total de eleitores totais são:' + eleitores);
//176375 eleitores
const porcenVTB = votosBrancos / eleitores  * 100;
const porcenVTN =  votoNulo / eleitores * 100;
const porcenVTV = votoValido / eleitores * 100;

console.log('A quantidade de eleitores que votaram em branco são:' + porcenVTB.toFixed(1) + "%")
console.log('A quantidade de eleitores que votaram Nulo são:' + porcenVTN.toFixed(1) + "%")
console.log('A quantidade de eleitores que o voto foi validado foram:' + porcenVTV.toFixed(1) + "%")




