"use strict";
function multiplicar(numero1, numero2, ...numeros) {
    return [numero1, numero2, ...numeros].reduce((acumulador, valorAtual) => acumulador * valorAtual, 1);
}
console.log(multiplicar(1, 2));
function dizOla(nome) {
    console.log("Olá " + nome);
}
dizOla("Hellen");
const arrayNum = [5, 5, 10, 12, 16];
const arraySoma = arrayNum.reduce((acumulador, valorAtual) => {
    return acumulador += valorAtual;
}, 0);
console.log(arraySoma);
